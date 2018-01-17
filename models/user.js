const mongoose = require('mongoose');

const User = new mongoose.Schema({
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'] }
}, {
    timestamps: true
});

User.virtual('isAdmin').get(function() {
    return this.role === 'admin';
});

module.exports = mongoose.model('User', User);