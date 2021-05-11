const router = require("express").Router();
const restaurantController = require("../Controller/restaurantController");

router.get("/", restaurantController.restData);

module.exports = router;
