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
            async authorize(credentials) {
                if (!credentials || !credentials.username || !credentials.password) {
                    return Promise.resolve(null);
                }

                if (
                    credentials.username === process.env.NEXT_AUTH_USERNAME &&
                    credentials.password === process.env.NEXT_AUTH_PASSWORD
                ) {
                    // Resolve with a user object
                    return Promise.resolve({
                        accepted: true,
                    });
                }

                // Invalid credentials
                return Promise.resolve(null);
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
