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
        default: 100
    },
    // moves: {
    //     type: [{Object}],
    // },
    isFighting: {
        type: Boolean,
        required: true,
        default: false
    },
    moves: [
        {
            type: Schema.Types.ObjectId,
            ref: "Battle"
        }
    ]
})

const Sprites = mongoose.model("Sprites", spriteSchema);

module.exports = Sprites;