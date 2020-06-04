"use strict";
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
      presentation: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
    models.User.hasMany(models.Project);
  };
  return User;
};
