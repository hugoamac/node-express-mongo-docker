module.exports = (db) => {

	const schemas = require("./schemas")(db);

	const model = db.getConnection().model("Pub", schemas.PubSchema);

	return model;
};
