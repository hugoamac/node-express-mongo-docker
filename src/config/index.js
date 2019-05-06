const fs = require("fs");
const path = require("path");

/**
 * This function getting the configuration of application
 */
function getConfig() {

	let fileName = process.env.NODE_ENV || "development";
	let pathFile = path.resolve(path.join(__dirname, "/", fileName + ".json"));

	try {

		if (fs.existsSync(pathFile)) {
			let objJson = fs.readFileSync(pathFile);
			return JSON.parse(objJson);
		}

		throw new Error("Config File not found in src/config folder");

	} catch (e) {
		throw new Error(e);
	}
}

module.exports = getConfig();
