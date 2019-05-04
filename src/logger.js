const bunyan = require("bunyan");
const PrettyStream = require("bunyan-pretty-stream");

/**
 * This class provides the wrapper of bunyan logger
 */
class Logger {

	/**
	 * This method provides the initialize of @Logger
	 */
	constructor() {

		this.logger = bunyan.createLogger({
			name: "Logger Application",
			streams: [
				{
					level: "info",
					stream: new PrettyStream(),
				},
			],
		});

	}
}

module.exports = new Logger().logger;
