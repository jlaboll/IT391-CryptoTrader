module.exports = {
    HOST: "localhost:3306",
    USER: "team-6-391",
    PASSWORD: "cryptocurrency",
    DB: "crypto",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};