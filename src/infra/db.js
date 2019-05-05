const mongoose = require("mongoose");
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
		const uri = `mongodb://${this.host}:${this.port}/${this.dbname}`;
		this.connection = mongoose.createConnection(uri, {
			useNewUrlParser: true,
			useCreateIndex: true
		});

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

}

module.exports = DB;
