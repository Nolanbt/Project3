const db = require("../models");

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
    }
}