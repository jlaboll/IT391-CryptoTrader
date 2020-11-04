
module.exports = (sequelize, Sequelize) => {
    const attributes = {
        user_id: {
            type: Sequelize.MEDIUMINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            comment: null,
            field: "user_id",
            unique: "user_id"
        },
        fname: {
            type: Sequelize.STRING(128),
            allowNull: false,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "fname"
        },
        lname: {
            type: Sequelize.STRING(128),
            allowNull: false,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "lname"
        },
        uname: {
            type: Sequelize.STRING(128),
            allowNull: false,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "uname"
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
            allowNull: false,
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