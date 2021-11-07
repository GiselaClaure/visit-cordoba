const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
    culture: [{ type: Schema.Types.ObjectId, ref: "culture" }],
    restaurant: [{ type: Schema.Types.ObjectId, ref: "restaurant"}],
    disco: [{ type: Schema.Types.ObjectId, ref: "disco" }],
});

const Place = mongoose.model("place", PlaceSchema);
module.exports = Place;