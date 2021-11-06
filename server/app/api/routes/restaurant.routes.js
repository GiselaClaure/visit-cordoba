const express = require("express");
const router = express.Router();

const { createRestaurant, getAllRestaurants, getRestaurantById } = require("../controllers/restaurant.controller");

router.post("/create", createRestaurant );
router.get("/", getAllRestaurants);
router.get("/:characterId", getRestaurantById);

module.exports = router;