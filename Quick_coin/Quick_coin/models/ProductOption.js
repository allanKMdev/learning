// models/ProductOption.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Product = require('./Product');  // Importing Product model

const ProductOption = sequelize.define('ProductOption', {
  weight: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

// A Product can have multiple options
ProductOption.belongsTo(Product, { foreignKey: 'product_id', onDelete: 'CASCADE' });

module.exports = ProductOption;
