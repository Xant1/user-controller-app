const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'postgres', 'kbi3234', {
  dialect: 'postgres',
  host: 'localhost',
  define: {
    timestamps: false,
  },
});

// определяем модель User
const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log('Sync complete');
  })
  .catch((err) => console.log(err));

module.exports = User;
