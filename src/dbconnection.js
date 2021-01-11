"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId
const { dbUrl } = require("./variables")

const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}

const connect = () => {
    mongoose.connect(`${dbUrl}`, mongoOptions)
        .then(async () => {
            console.log("connected to mongo db")
        })
        .catch(err => console.log("Could not connect to MongoDB...", err));
};

exports.getPrimaryKey = (_id) => {
    return ObjectId(_id)
}

module.exports = { connect };
