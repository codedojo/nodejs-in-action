const { TEXT, INTEGER, DATEONLY } = require('sequelize');

const db = require('../services/db');

const Post = db.define('post', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: { type: TEXT, allowNull: false },
    body: { type: TEXT('long'), allowNull: false },
    date: { type: DATEONLY, allowNull: false },
    authorId: { type: INTEGER, allowNull: false }
}, {
    timestamps: false,
    getterMethods: {
        preview() {
            let body = this.getDataValue('body');

            return body.length > 30 ? body.substr(0, 30) + '...' : body;
        }
    }
});

module.exports = Post;