const dbConfig = require("../config/db_config.js");
import Sequelize from "sequelize";
const sqlize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
const db = {};

db.sequelize = sqlize;

db.user = require("./table_user.js")(sqlize);
db.coin = require("./table_coin.js")(sqlize);
db.wallet = require("./table_wallet.js")(sqlize);

module.exports = db;