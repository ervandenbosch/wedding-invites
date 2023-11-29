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
            authorize: async (credentials) =>
                !credentials || !credentials.username || !credentials.password
                    ? Promise.reject(new Error('/signin?error=empty-credentials'))
                    : credentials.username === process.env.NEXT_AUTH_USERNAME &&
                      credentials.password === process.env.NEXT_AUTH_PASSWORD
                    ? Promise.resolve({ accepted: true })
                    : Promise.reject(new Error('/signin?error=invalid-credentials')),
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
