const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Gem = mongoose.model('Gem', gemSchema);

module.exports = Gem;