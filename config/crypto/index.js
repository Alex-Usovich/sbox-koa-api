const cryptoConfig = {
    hash: {
        length: 256,
        // may be slow(!): iterations = 12000 take ~60ms to generate strong password
        iterations: process.env.NODE_ENV === 'production' ? 12000 : 200
    }
};

export { cryptoConfig };
