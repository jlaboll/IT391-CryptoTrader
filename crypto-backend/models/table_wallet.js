const {
    DataTypes
} = require('sequelize');

module.exports = sequelize => {
    const attributes = {
        wallid: {
            type: DataTypes.STRING(8),
            allowNull: false,
            defaultValue: null,
            primaryKey: true,
            autoIncrement: false,
            comment: null,
            field: "wallid",
            unique: "wallid"
        },
        wall_name:{
            type: DataTypes.STRING(128),
            allowNull: false,
            defaultValue: "Wallet",
            comment: null
        },
        usd: {
            type: DataTypes.DECIMAL,
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "usd"
        },
        user_id: {
            type: DataTypes.STRING(8),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "user_id",
            references: {
                key: "user_id",
                model: "user_model"
            }
        }
    };
    const options = {
        tableName: "wallet",
        comment: "",
        indexes: [{
            name: "user_id",
            unique: false,
            type: "BTREE",
            fields: ["user_id"]
        }]
    };
    const WalletModel = sequelize.define("wallet_model", attributes, options);
    return WalletModel;
};