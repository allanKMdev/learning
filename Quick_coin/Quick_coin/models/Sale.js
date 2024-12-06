// models/Sale.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Customer = require('./Customer');  // Importing Customer model

const Sale = sequelize.define('Sale', {
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  payment_method: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['Cash', 'Debt']],  // Can only be 'Cash' or 'Debt'
    },
  },
});

Sale.belongsTo(Customer, { foreignKey: 'customer_id', onDelete: 'SET NULL' });  // Sale has a foreign key referencing Customer (nullable)

module.exports = Sale;
