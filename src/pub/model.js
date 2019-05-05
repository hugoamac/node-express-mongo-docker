module.exports = (db) => {

	const schemas = require("./schemas")(db);

	let model = db.getConnection().model("Pub", schemas.PubSchema);

	return model;
};
