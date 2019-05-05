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
		let result = null;
		let response = null;

		try {

			result = await this.model.create(data);
			response = {
				httpStatus: values.HTTP_STATUS.OK,
				responseCode: values.RESPONSE.PUB_CREATED,
				data: result
			};

			return res.status(values.HTTP_STATUS.OK).json(response);

		} catch (e) {

			logger.info(`Error: ${e}`);
			response = {
				httpStatus: values.HTTP_STATUS.INTERNAL_ERROR,
				responseCode: values.RESPONSE.PUB_NOT_CREATED,
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
		let result = null;
		let response = null;

		try {
			result = await this.model.findOne({ id });


			if (result !== null) {

				response = {
					httpStatus: values.HTTP_STATUS.OK,
					responseCode: values.RESPONSE.OK,
					data: result
				};

			} else {

				response = {
					httpStatus: values.HTTP_STATUS.NOT_FOUND,
					responseCode: values.RESPONSE.PUB_NOT_FOUND,
					data: null
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
