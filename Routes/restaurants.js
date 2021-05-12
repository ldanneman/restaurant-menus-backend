const router = require("express").Router();
const restaurantController = require("../Controller/restaurantController");

router.get("/", restaurantController.restData);
router.post("/update", restaurantController.updateData);

module.exports = router;
