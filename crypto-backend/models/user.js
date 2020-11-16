/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      primaryKey: true
    },
    fname: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    lname: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    uname: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: "uname"
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    psswd: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "uname",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uname" },
        ]
      },
    ]
  });
};
