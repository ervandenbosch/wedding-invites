import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'username' },
                password: { label: 'Password', type: 'password', placeholder: 'password' },
            },
            authorize: async (credentials) => {
                return new Promise((resolve, reject) => {
                    if (!credentials || !credentials.username || !credentials.password) {
                        reject('/signin?error=empty-credentials');
                    } else if (
                        credentials.username === process.env.NEXT_AUTH_USERNAME &&
                        credentials.password === process.env.NEXT_AUTH_PASSWORD
                    ) {
                        resolve({ accepted: true });
                    } else {
                        reject('/signin?error=invalid-credentials');
                    }
                });
            },
        }),
    ],
    pages: {
        signIn: '/signin',
    },
    secret: process.env.NEXT_AUTH_SECRET,
    debug: true,
    logger: {
        error(code, metadata) {
            console.error(code, metadata);
        },
        warn(code) {
            console.warn(code);
        },
        debug(code, metadata) {
            console.debug(code, metadata);
        },
    },
});
