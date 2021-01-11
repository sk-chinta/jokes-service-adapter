"use strict";

const Router = require("koa-router");
const router = new Router();

const jokesController = require("./controllers/jokes");
const imagesController = require("./controllers/images");

router
    /** Jokes Resources */
    .get("/jokes", jokesController.getJokes)
    .post("/jokes", jokesController.loadJokes)
    /** Images Resources */
    .get("/images", imagesController.getImages)
    .post("/images", imagesController.loadImages)

module.exports = router;
