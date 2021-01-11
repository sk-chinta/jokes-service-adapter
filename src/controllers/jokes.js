"use strict";

const { jokesModel } = require('../models/jokes');
const jokesData = require('../jokesData.json')

exports.getJokes = async ctx => {
    try {
        const jokes = await jokesModel.find();

        const requestResponse = {
            status: 200,
            body: jokes,
        };
        ctx.body = requestResponse;

    } catch (error) {
        ctx.body = error;
    }
};

exports.loadJokes = async ctx => {
    try {
        const jokes = await jokesModel.insertMany(jokesData)

        const requestResponse = {
            status: 200,
            body: jokes,
        };
        ctx.body = requestResponse;

    } catch (error) {
        ctx.body = error;
    }
};

