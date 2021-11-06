const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiscoSchema = new Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    adress: { type: String, required: true },
    hour: { type: String, required: true },
});

const Disco = mongoose.model("disco", DiscoSchema);
module.exports = Disco;