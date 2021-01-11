"use strict";

const { imagesModel } = require('../models/images');
const imagesData = require('../imagesData.json')

exports.getImages = async ctx => {
    try {
        const images = await imagesModel.find();

        const requestResponse = {
            status: 200,
            body: images,
        };
        ctx.body = requestResponse;

    } catch (error) {
        ctx.body = error;
    }
};

exports.loadImages = async ctx => {
    try {        
        const images = await imagesModel.insertMany(imagesData)        

        const requestResponse = {
            status: 200,
            body: images,
        };
        ctx.body = requestResponse;

    } catch (error) {
        ctx.body = error;
    }
};