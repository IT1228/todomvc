const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    order: { type: Number, required: true },
    completed: { type: Boolean, required: true, default: false},
});

const todo = mongoose.model('todo', todoSchema);

module.exports = todo;