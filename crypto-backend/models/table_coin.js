
module.exports = (sequelize, Sequelize) => {
    const attributes = {
        coinid: {
            type: DataTypes.STRING(8),
            allowNull: false,
            defaultValue: null,
            primaryKey: true,
            autoIncrement: false,
            comment: null,
            field: "coinid",
            unique: "coinid"
        },
        amt: {
            type: DataTypes.DECIMAL,
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "amt"
        },
        buy_price: {
            type: DataTypes.DECIMAL,
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "buy_price"
        },
        api_id: {
            type: DataTypes.STRING(3),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "api_id"
        },
        wallid: {
            type: DataTypes.STRING(8),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "wallid",
            references: {
                key: "wallid",
                model: "wallet_model"
            }
        }
    };
    const options = {
        tableName: "coin",
        comment: "",
        indexes: [{
            name: "wallid",
            unique: false,
            type: "BTREE",
            fields: ["wallid"]
        }]
    };
    return sequelize.define("coin_model", attributes, options);
};