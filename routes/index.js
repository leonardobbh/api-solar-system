const express = require("express");
const mainController = require("../controllers/mainController");

const routes = express.Router();

routes.get("/", mainController.index);
routes.get("/planets", mainController.planets);
routes.get("/planet/:id", mainController.planetID);
routes.get("/planet/find/:name", mainController.planetFind);

module.exports = { routes };