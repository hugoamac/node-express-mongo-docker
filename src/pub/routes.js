const router = require("express").Router();
const PubController = require("./controller");

module.exports = (db) => {

	const model = require("./model")(db);
	const pubController = new PubController(model);

	/**
	 * This route provides the path to creating of the pub
	 */
	router.post("/", async (req, res, next) => {

		return await pubController.create(req, res, next);

	});

	/**
	 * This route provides the path to getting the pub by id
	 */
	router.get("/:id", async (req, res, next) => {

		return await pubController.findBydId(req, res, next);

	});

	/**
	 * This route provides the path to searching the pub by longitude and latitude
	 */
	router.post("/search", async (req, res, next) => {

		return await pubController.findByLongitudeAndLatitude(req, res, next);

	});

	return router;
};
