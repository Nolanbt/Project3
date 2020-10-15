const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Sprites
            .find({})
            .populate("moves")
            .then(dbModel => {
                res.json(dbModel)
                console.log(dbModel)
            })
            .catch(err => console.log(err));
    },
    findOne: function (req, res) {
        db.Sprites
            .find({isFighting: true})
            .populate("moves")
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    findByEmail: function (req, res) {
        db.Sprites
            .find({ email: req.params.email })
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    selectSprite: function (req, res) {
        db.Sprites.updateMany({isFighting: true}, {isFighting: false})
            .then(data => {
                console.log(data);
                res.json(data)
            })
            .catch(err => {
                console.log(err);
                process.exit(1);
            });
        db.Sprites.updateOne({_id: req.body.id} , {isFighting: true})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                console.log(err);
            });
    },
    findFighters: function (req, res) {
        db.Battle
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    }
}