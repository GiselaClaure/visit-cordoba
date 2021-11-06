const Place = require("../models/place.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createPlace = async (req, res, next) => {
    try {
        const newPlace = new Place();
        newPlace.culture = req.body.name;
        newPlace.restaurant = req.body.flag;
        newPlace.disco = req.body.dishes;
        const PlaceDb = await newPlace.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { place: PlaceDb }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllPlaces = async (req, res, next) => {
    try {
        const places = await Place.find().populate("");
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { places: places }
        })
    } catch (error) {
        return next(error);
    }
}

module.exports = { createPlace, getAllPlaces }