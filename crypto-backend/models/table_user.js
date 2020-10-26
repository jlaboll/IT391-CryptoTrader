
module.exports = (sequelize, Sequelize) => {
    const attributes = {
        user_id: {
            type: Sequelize.STRING(8),
            allowNull: false,
            defaultValue: null,
            primaryKey: true,
            autoIncrement: false,
            comment: null,
            field: "user_id",
            unique: "user_id"
        },
        fname: {
            type: Sequelize.STRING(128),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "fname"
        },
        lname: {
            type: Sequelize.STRING(128),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "lname"
        },
        email: {
            type: Sequelize.STRING(128),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "email"
        },
        psswd: {
            type: Sequelize.STRING(128),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "psswd"
        }
    };
    const options = {
        tableName: "user",
        comment: "",
        indexes: []
    };
    return sequelize.define("user_model", attributes, options);
};