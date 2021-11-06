const express = require("express");
const router = express.Router();

const { createPlace, getAllPlaces } = require("../controllers/place.controller");

router.post("/create", createPlace);
router.get("/", getAllPlaces);

module.exports = router;