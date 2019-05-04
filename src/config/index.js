const fs = require("fs");
const path = require("path");

function getConfig() {

	let fileName = process.env.ENVIRONMENT || "development";
	let pathFile = path.resolve(path.join(__dirname, "/", fileName + ".json"));

	try {

		if (fs.existsSync(pathFile)) {
			objJson = fs.readFileSync(pathFile);
			return JSON.parse(objJson);

		}

		throw new Error(`Config File not found in src/config folder`);

	} catch (e) {
		throw new Error(e);
	}
}

module.exports = getConfig();