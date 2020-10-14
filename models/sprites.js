const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spriteSchema = new Schema({
    email: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    health: {
        type: Number,
        default: 500
    },
    moves: {
        type: [{Object}],
    }
})

const Sprites = mongoose.model("Sprites", spriteSchema);

module.exports = Sprites;