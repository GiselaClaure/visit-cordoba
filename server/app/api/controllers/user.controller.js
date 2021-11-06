const mongoose= require("mongoose");
const Schema= mongoose.Schema;

const PlaceSchema = new Schema(
    {
        name: { type: String, require: true },
        image: { type: String, require: true },
        location: { type: String, require: true },
        hour: { type: String, require: true },
    },
    { timestamps: true }
);

const Dish= mongoose.model("dish", DiscoSchema);
module.exports = Dish;