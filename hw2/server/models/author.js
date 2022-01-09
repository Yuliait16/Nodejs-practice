const mongoose = require('mongoose');
const Schema = mongoose.Schema

const authorSchema = new Schema({
    name: { type: String, required: true },
    email: {type: String, require: true, unique: true}
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', authorSchema);
