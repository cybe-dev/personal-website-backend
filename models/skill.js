"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  skill.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      percent: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
          isNumeric: true,
        },
      },
    },
    {
      sequelize,
      modelName: "skill",
    }
  );
  return skill;
};
