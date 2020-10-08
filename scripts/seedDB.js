const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/sprites"
);

const spriteSeed = [
    {
        name: "Boss",
        health: 500,
        moves: ["Move 1", "Move 2", "Move 3", "Move 4"]
    },
    {
        name: "Guest",
        health: 500,
        moves: ["Move 1", "Move 2", "Move 3", "Move 4"]
    }
];

db.Sprites.remove({})
    .then(()=> db.Sprites.collection.insertMany(spriteSeed))
    .then(data=> {
        console.log(data.result.n + " sprites inserted");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })