const router = require("express").Router();
const spriteController = require("../controllers/spriteController")

router.route("/sprites/all")
    .get(spriteController.findAll)

router.route("/sprites/:id")
    .get(spriteController.findOne)

router.route("/sprites/:email")
    .get(spriteController.findByEmail)

module.exports = router;