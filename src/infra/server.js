const http = require("http");

/**
 * This class provides the wrapper to http server of nodejs
 */
class Server {

	/**
	 * This method provides initialize the properties of the @Server class
	 * @param {Object - Appication Express} app 
	 * @param {Object} config 
	 */
	constructor(app, config) {
		this.http = http.createServer(app);
		this.config = config.server;
	}

	/**
	 * This method will upload the http server
	 */
	async start() {
		const host = this.config.host;
		const port = this.config.port;

		return new Promise((resolve, reject) => {
			this.http.listen(port, host, (err) => {
				if (err) {
					reject(err);
				}
				resolve(`Server ${host} listening on port ${this.config.port}`);
			});
		});
	}
}

module.exports = Server;
