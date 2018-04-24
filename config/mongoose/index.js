module.exports = {
    mongoose: {
        uri:     'mongodb://localhost/testapp',
        options: {
            server: {
                socketOptions: {
                    keepAlive: 1
                },
                poolSize:      5
            }
        }
    }
};
