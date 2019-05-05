module.exports = (db) => {

	let Schema = db.getSchema();

	/**
	 * This represents multipolygon schema
	 */
	const MultiPolygonSchema = new Schema({
		type: {
			type: String,
			enum: ["MultiPolygon"],
			required: true
		},
		coordinates: {
			type: [[[[Number]]]],
			required: true
		}
	});

	/**
	 * This represents point schema
	 */
	const PointSchema = new Schema({
		type: {
			type: String,
			enum: ["Point"],
			required: true
		},
		coordinates: {
			type: [Number],
			required: true
		}
	});

	/**
	 * This represents pub schema
	 */
	const PubSchema = new Schema({

		tradingName: {
			type: String,
			required: true
		},
		ownerName: {
			type: String,
			required: true
		},
		document: {
			type: String,
			index: true,
			unique: true,
			required: true
		},
		coverageArea: {
			type: MultiPolygonSchema,
			required: true
		},
		address: {
			type: PointSchema,
			required: true
		}

	}, { collection: "pubs", versionKey: false });

	PubSchema.plugin(db.getAutoIncrementPlugin(), {
		model: "Pub",
		field: "id",
		startAt: 1,
		incrementBy: 1
	});

	return {
		MultiPolygonSchema,
		PointSchema,
		PubSchema
	};
};
