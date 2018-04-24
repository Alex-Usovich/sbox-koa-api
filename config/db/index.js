const DB_DRIVER = 'mysql';
const DB_CONNECTION = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'test'
};

const DB_POOL = {
    min: 0,
    max: 50
};

export {
    DB_DRIVER,
    DB_CONNECTION,
    DB_POOL
};
