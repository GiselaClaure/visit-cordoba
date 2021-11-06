const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
    culture: [{ type: Schema.Types.ObjectId, ref: "culture", required: true }],
    restaurant: [{ type: Schema.Types.ObjectId, ref: "restaurant", required: true }],
    disco: [{ type: Schema.Types.ObjectId, ref: "disco", required: true }],


});

const Place = mongoose.model("place", PlaceSchema);
module.exports = Place;