var DataTypes = require("sequelize").DataTypes;
var _coin = require("./coin");
var _user = require("./user");
var _wallet = require("./wallet");

function initModels(sequelize) {
  var coin = _coin(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var wallet = _wallet(sequelize, DataTypes);

  coin.belongsTo(wallet, { foreignKey: "wallid"});
  wallet.hasMany(coin, { foreignKey: "wallid"});
  wallet.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(wallet, { foreignKey: "user_id"});

  return {
    coin,
    user,
    wallet,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
