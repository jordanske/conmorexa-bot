module.exports = {
    apps: [
        {
            script: './dist/index.js',
            watch: './dist',
            ignore_watch: [
                './src'
            ]
        }
    ]
};
