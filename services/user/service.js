'use strict';

module.exports = {
    name : "user",
    title: "Service user",
    author: 'Tran Quoc Cuong',
    version: '0.1.0',
    description: "CRUD user and authenticate",
    config : {
        db: {
            host: 'localhost',
            port: '5432',
            database: 'arrowjs',
            username: 'postgres',
            password: '',
            dialect: 'postgres',
            logging: false
        }
    }
};






