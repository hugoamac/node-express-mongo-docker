const mongoose = require("mongoose");
const autoIncrement = require("mongoose-autoincrement-model");
const config = require("../config");

/**
 * This class provides the wrapper for connection mongodb
 */
class DB {

	/**
	* This method provides the initialize of @DB
	*/
	constructor() {

		this.host = config.database.host;
		this.port = config.database.port;
		this.dbname = config.database.dbname;

		this.uri = `mongodb://${this.host}:${this.port}/${this.dbname}`;

		this.connection = mongoose.createConnection(this.uri, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false
		});

		autoIncrement.initialize(this.connection);

	}

	/**
	 * This method getting connection
	 */
	getConnection() {
		return this.connection;
	}

	/**
	 * This method is wrapper to mongoose schema
	 */
	getSchema() {

		return mongoose.Schema;
	}

	/**
	 * This method is wrapper to autoincrement plugin
	 */
	getAutoIncrementPlugin() {
		return autoIncrement.plugin;
	}

}

module.exports = DB;
