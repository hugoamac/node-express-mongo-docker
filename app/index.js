const logger = require("../src/infra/logger");
const Server = require("../src/infra/server");
const App = require("../src/app");
const config = require("../src/config/");

let appExpress = new App();
let server = new Server(appExpress.app, config);

server.start().then(message => {

	logger.info(`Message ${message}`);

}).catch(error => {

	logger.info(`Error ${error}`);

});
