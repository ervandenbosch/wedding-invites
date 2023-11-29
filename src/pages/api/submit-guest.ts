import { getSession } from 'next-auth/react';
import { SES, Credentials, Provider } from '@aws-sdk/client-ses';
import type { NextApiRequest, NextApiResponse } from 'next';

import { validateIncomingValues } from '@/lib/validateIncomingValues';
import connectToDatabase from '@/lib/mongodb';
import { checkResponse } from '@/lib/ses';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session) return res.status(401);

    const error = validateIncomingValues(req.body);

    if (error) return res.json({ error });

    const { db } = await connectToDatabase();

    const { acknowledged } = await db.collection('rsvps').insertOne(req.body);

    try {
        let errorSesCheck;

        const sesConfig: {
            credentials: Credentials | Provider<Credentials>;
            region: string;
        } = {
            credentials: {
                accessKeyId: process.env.AWS_KEY,
                secretAccessKey: process.env.AWS_SECRET,
            },
            region: 'us-east-2',
        };

        const sesClient = new SES(sesConfig);

        await sesClient
            .sendEmail({
                Source: `Wedding Invitation Response <${process.env.ADMIN_EMAIL}>`,
                Destination: {
                    ToAddresses: [process.env.USER_EMAIL as string],
                },
                Message: {
                    Body: {
                        Text: {
                            Data: checkResponse(req.body) as string,
                        },
                    },
                    Subject: {
                        Data: `Wedding response from ${req.body.fullName}`,
                    },
                },
            })
            .catch((err) => {
                console.log('err sending email', err.message);
                errorSesCheck = err.message;
            });

        if (errorSesCheck) {
            return res.json({ success: 'false', errorSesCheck });
        }

        return res.json({ success: acknowledged ? 'true' : 'false' });
    } catch (err) {
        return console.log('ERROR sending email TO CLIENT: ', err);
    }
};
