"use strict";
module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define(
    "Project",
    {
      title: DataTypes.STRING,
      problem: DataTypes.STRING,
      description: DataTypes.STRING,
      objectives: DataTypes.STRING,
      expectedResults: DataTypes.STRING,
      tools: DataTypes.STRING,
      available: DataTypes.STRING,
      likes: DataTypes.INTEGER
    },
    {}
  );
  Project.associate = function(models) {
    // associations can be defined here
    models.Project.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Project;
};
