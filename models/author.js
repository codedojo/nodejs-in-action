const { INTEGER, STRING } = require('sequelize');

const db = require('../services/db');

const Author = db.define('author', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    firstname: { type: STRING, allowNull: false },
    lastname: { type: STRING, allowNull: false }
}, {
    timestamps: false,
    getterMethods: {
        fullname() {
            return `${this.getDataValue('firstname')} ${this.getDataValue('lastname')}`;
        }
    }
});

module.exports = Author;