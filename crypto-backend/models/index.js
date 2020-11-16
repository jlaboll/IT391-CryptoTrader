const dbConfig = require("../config/db_config.js");
const Sequelize = require("sequelize");
const initModels = require("./init-models");
const sqlize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

async function testConnection(){
    try {
        await sqlize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
testConnection();
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sqlize;
db.coin, db.user, db.wallet = initModels(sqlize);

module.exports = db;