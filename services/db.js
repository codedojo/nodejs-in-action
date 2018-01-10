const Sequelize = require('sequelize');

const sequelize = new Sequelize('blog', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;