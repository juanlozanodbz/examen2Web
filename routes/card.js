const router = require("express").Router
const cardController = require("../controllers/card")

router.post("/addCard", cardController.postAddCard)

module.exports = router