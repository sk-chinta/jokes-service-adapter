
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const imagesSchema = new Schema({
    id: { type: Number, unique: true, required: true },
    type: {
        type: String,
        enum: ["general", "knock-knock", "programming"]
    },
    url: { type: String },
},
{
    timestamps: true
})

const imagesModel = model('images', imagesSchema)

module.exports = { imagesModel }
