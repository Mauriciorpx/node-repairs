const { Sequelize } = require('sequelize');
const db = new Sequelize({
    dialect: 'postgres', /* Tyoe of DB */
    host: 'localhost',
    username: 'postgres',  /* Username of the database, the default value is postgres */
    password: 'judasmesias1', /* password of the DB */
    database: 'pcRepair', /* Name of the database */
    port: 5433,
    logging: false,
})

module.exports = { db };