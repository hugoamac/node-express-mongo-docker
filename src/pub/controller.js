const logger = require("../infra/logger");
const responseCode = require("../infra/response-code");
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
				httpStatus: 200,
				responseCode: responseCode.CREATE_SUCCESS.CODE,
				message: responseCode.CREATE_SUCCESS.MESSAGE,
				data: result
			};

			return res.status(200).json(response);

		} catch (e) {

			logger.info(`Error: ${e}`);
			response = {
				httpStatus: 500,
				responseCode: responseCode.CREATE_FAIL.CODE,
				message: responseCode.CREATE_FAIL.MESSAGE,
				data: result
			};

			return res.status(500).json(response);
		}

	}

}

module.exports = PubController;
