const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns

    id:{

      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true

    },

    category_name:{

      type:DataTypes.STRING,
      allowNull:false

    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
