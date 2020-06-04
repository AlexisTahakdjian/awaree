"use strict";
module.exports = (sequelize, DataTypes) => {
  const Participant = sequelize.define(
    "Participant",
    {
      projectId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Project",
          key: "id"
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id"
        }
      },
      isLike: DataTypes.INTEGER
    },
    {}
  );
  Participant.associate = function(models) {
    models.User.belongsToMany(models.Project, {
      through: models.Participant,
      foreignKey: "userId",
      otherKey: "projectId"
    });

    models.Project.belongsToMany(models.User, {
      through: models.Participant,
      foreignKey: "projectId",
      otherKey: "userId"
    });

    models.Participant.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user"
    });

    models.Participant.belongsTo(models.Project, {
      foreignKey: "projectId",
      as: "project"
    });
  };
  return Participant;
};
