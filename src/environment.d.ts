declare global {
    namespace NodeJS {
        interface ProcessEnv {
            // GITHUB_AUTH_TOKEN: string;
            // NODE_ENV: 'development' | 'production';
            TOKEN: string;
            GUILD_ID: string;
            CLIENT_ID: string;
            DB_HOST: string;
            DB_PORT: string;
            DB_NAME: string;
            DB_USER: string;
            DB_PASS: string;
        }
    }
}

export { };