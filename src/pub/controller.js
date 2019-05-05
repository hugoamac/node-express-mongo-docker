const logger = require("../infra/logger");
const values = require("../infra/values");
/**
 * This class provides the controller for handling calls from endpoints of api pub
 */
class PubController {

	/**
	 * This method provides the initialize of @PubController
	 * @param {PubModel} model 
	 */
	constructor(model) {

		this.model = model;
	}

	/**
	 * This method provides the rule for creating one pub
	 * @param {Object - request Express} req 
	 * @param {Object - response Express} res 
	 * @param {Object - next Express} next 
	 */
	async create(req, res, next) {

		const data = req.body;
		let response = null;

		try {

			const result = await this.model.create(data);
			response = {
				httpStatus: values.HTTP_STATUS.OK,
				responseCode: values.RESPONSE.PUB_CREATED,
				pdv: result
			};

			return res.status(values.HTTP_STATUS.OK).json(response);

		} catch (e) {

			logger.info(`Error: ${e}`);
			response = {
				httpStatus: values.HTTP_STATUS.INTERNAL_ERROR,
				responseCode: values.RESPONSE.PUB_NOT_CREATED
			};

			return res.status(values.HTTP_STATUS.INTERNAL_ERROR).json(response);
		}

	}

	/**
	 * This method provides the rule for getting pub by id
	 * @param {Object - request Express} req 
	 * @param {Object - response Express} res 
	 * @param {Object - next Express} next 
	 */
	async findBydId(req, res, next) {

		const id = req.params.id;

		let response = {
			httpStatus: values.HTTP_STATUS.BAD_REQUEST,
			responseCode: values.RESPONSE.INVALID_PARAM
		};

		if (!id) {
			return res.status(values.HTTP_STATUS.BAD_REQUEST).json(response);
		}

		try {

			let result = await this.model.findOne({ id });

			if (result !== null) {

				response = {
					httpStatus: values.HTTP_STATUS.OK,
					responseCode: values.RESPONSE.OK,
					pdv: result
				};

			} else {

				response = {
					httpStatus: values.HTTP_STATUS.NOT_FOUND,
					responseCode: values.RESPONSE.PUB_NOT_FOUND,
					pdv: null
				};
			}

			return res.status(response.httpStatus).json(response);

		} catch (e) {

			logger.info(`Error: ${e}`);
			response = {
				httpStatus: values.HTTP_STATUS.INTERNAL_ERROR,
				responseCode: values.RESPONSE.PUB_NOT_FOUND
			};

			return res.status(values.HTTP_STATUS.INTERNAL_ERROR).json(response);
		}
	}

	/**
	 * This method provides the rule for getting pub by longitude and latitude
	 * @param {Object - request Express} req 
	 * @param {Object - response Express} res 
	 * @param {Object - next Express} next 
	 */
	async findByLongitudeAndLatitude(req, res, next) {

		const { longitude, latitude } = req.body;

		let response = {
			httpStatus: values.HTTP_STATUS.BAD_REQUEST,
			responseCode: values.RESPONSE.INVALID_PARAM
		};

		if (longitude === undefined || latitude === undefined) {
			return res.status(values.HTTP_STATUS.BAD_REQUEST).json(response);
		}

		try {

			let result = await this.model.find({
				coverageArea: {
					$geoIntersects:
					{
						$geometry: {
							"type": "Point",
							"coordinates": [longitude, latitude]
						}
					}
				}
			});

			if (result.length > 0) {

				response = {
					httpStatus: values.HTTP_STATUS.OK,
					responseCode: values.RESPONSE.OK,
					pdvs: result
				};

			} else {

				response = {
					httpStatus: values.HTTP_STATUS.NOT_FOUND,
					responseCode: values.RESPONSE.PUB_NOT_FOUND,
					pdvs: []
				};
			}

			return res.status(response.httpStatus).json(response);

		} catch (e) {

			logger.info(`Error: ${e}`);
			response = {
				httpStatus: values.HTTP_STATUS.INTERNAL_ERROR,
				responseCode: values.RESPONSE.PUB_NOT_FOUND
			};

			return res.status(values.HTTP_STATUS.INTERNAL_ERROR).json(response);
		}

	}

}

module.exports = PubController;
