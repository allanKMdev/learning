// models/DebtPayment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Customer = require('./Customer');  // Importing Customer model

const DebtPayment = sequelize.define('DebtPayment', {
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  payment_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

// A DebtPayment belongs to a Customer
DebtPayment.belongsTo(Customer, { foreignKey: 'customer_id', onDelete: 'CASCADE' });

module.exports = DebtPayment;
