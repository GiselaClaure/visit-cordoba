const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DaySchema = new Schema({
    number: { type: number, required:true, unique: true},
    places: [{ type: Schema.Types.ObjectId, ref: "place" }],
});

const Day = mongoose.model("day", DaySchema);
module.exports = Day;