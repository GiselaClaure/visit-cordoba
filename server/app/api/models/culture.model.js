const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CultureSchema = new Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    adress: { type: String, required: true },
    hour: { type: String, required: true },
});

const Culture = mongoose.model("culture", CultureSchema);
module.exports = Culture;