const express = require("express");
const bodyParser = require("body-parser");
const DB = require("./infra/db");

const db = new DB();
const PubRoutes = require("./pub/routes")(db);

/**
 * This class provides the wrapper to application express
 */
class App {

	/**
	 * This method provides initialize the properties of @App class
	 */
	constructor() {

		this.app = express();
		this.middleware();
		this.routes();
	}

	/**
	 * This method provides the wrapper to all middlewares of  express application
	 */
	middleware() {

		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: true }));
	}

	/**
	 * this method provides the wrapper to routes of express application
	 */
	routes() {

		this.app.get("/", (req, res) => {

			res.json("Express Application");
		});

		this.app.use("/api/pub", PubRoutes);

	}

}

module.exports = App;
