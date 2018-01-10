const db = require('../services/db');

const Author = require('./author');
const Post = require('./post');

Author.hasMany(Post);
Post.belongsTo(Author);

db.sync({ force: false });

module.exports = {
    Author,
    Post
};