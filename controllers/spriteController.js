const db = require("../models");
const { find } = require("../models/sprites");

module.exports = {
    findAll: function(req,res) {
        db.Sprites
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).end());
    },
    findOne: function(req, res) {
        db.Sprites
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).end());
    },
    findByEmail: function(req,res) {
        find({email: req.params.email})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).end());
    }
}