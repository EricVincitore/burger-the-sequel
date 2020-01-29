function burger (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1, 75]
    },
    devoured:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
  }); 
  return Burger; 
};

module.exports = burger;