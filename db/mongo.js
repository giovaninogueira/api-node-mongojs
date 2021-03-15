'use strict';

const mongojs = require('mongojs');
const config = require('config');
const debug = require('debug')('livro_nodejs:db');

let _connection = () => {
    const connectiObj = {
        username: config.get('mongo.username'),
        password: config.get('mongo.password'),
        server: config.get('mongo.server'),
        port: config.get('mongo.port'),
        database: config.get('mongo.database'),
    };
    const auth = connectiObj.username ? `${connectiObj.username}:${connectiObj.password}@` : '';
    return `mongodb://${auth}${connectiObj.server}:${connectiObj.port}/${connectiObj.database}`;
};

console.log(_connection());

const db = mongojs(_connection());

db.on('error', (err) => {
    debug(err);
});

module.exports = db;

