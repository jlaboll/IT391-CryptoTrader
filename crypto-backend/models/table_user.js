const {
    DataTypes
} = require('sequelize');

module.exports = sequelize => {
    const attributes = {
        user_id: {
            type: DataTypes.STRING(8),
            allowNull: false,
            defaultValue: null,
            primaryKey: true,
            autoIncrement: false,
            comment: null,
            field: "user_id",
            unique: "user_id"
        },
        fname: {
            type: DataTypes.STRING(128),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "fname"
        },
        lname: {
            type: DataTypes.STRING(128),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "lname"
        },
        email: {
            type: DataTypes.STRING(128),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "email"
        },
        psswd: {
            type: DataTypes.STRING(128),
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
    const UserModel = sequelize.define("user_model", attributes, options);
    return UserModel;
};