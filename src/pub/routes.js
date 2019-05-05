const router = require("express").Router();
const PubController = require("./controller");

module.exports = (db) => {

	let model = require("./model")(db);
	let pubController = new PubController(model);

	router.post("/", async (req, res, next) => {

		return await pubController.create(req, res, next);

	});

	return router;
};
