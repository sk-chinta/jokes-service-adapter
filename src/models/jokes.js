
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const jokesSchema = new Schema({
    id: { type: Number, unique: true, required: true },
    type: {
        type: String,
        enum: ["general", "knock-knock", "programming"]
    },
    setup: { type: String},
    punchline: { type: String }
},
{
    timestamps: true
})

const jokesModel = model('jokes', jokesSchema)

module.exports = { jokesModel }
