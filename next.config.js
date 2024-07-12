module.exports = {
    reactStrictMode: true,
    eslint: { ignoreDuringBuilds: true },
    env: {},
    async redirects() {
        return [
            {
                source: '/invite',
                destination: '/',
                permanent: true,
            },
            {
                source: '/invitation',
                destination: '/',
                permanent: true,
            },
        ];
    },
};
