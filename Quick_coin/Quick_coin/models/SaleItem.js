// models/SaleItem.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Sale = require('./Sale');          // Importing Sale model
const Product = require('./Product');    // Importing Product model

const SaleItem = sequelize.define('SaleItem', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

// A Sale can have multiple SaleItems
SaleItem.belongsTo(Sale, { foreignKey: 'sale_id', onDelete: 'CASCADE' });
// A SaleItem belongs to a Product
SaleItem.belongsTo(Product, { foreignKey: 'product_id', onDelete: 'CASCADE' });

module.exports = SaleItem;
