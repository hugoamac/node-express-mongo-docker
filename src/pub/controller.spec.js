const mocha = require("mocha");
const chai = require("chai");
const sinon = require("sinon");
const sinonMongoose = require("sinon-mongoose");
const sinonChai = require("sinon-chai");
const sinonMockExpress = require("sinon-express-mock");

const DB = require("../infra/db");
const Pub = require("./model")(new DB());
const PubController = require("./controller");
const values = require("../infra/values");

chai.should();
chai.use(sinonChai);

const expect = chai.expect;
const mockReq = sinonMockExpress.mockReq;
const mockRes = sinonMockExpress.mockRes;

describe("PubController", () => {

	describe("~> create()", () => {

		let body;

		beforeEach(() => {

			body = {
				"tradingName": "Adega do Lais",
				"ownerName": "Lais",
				"document": "76672670220/002",
				"coverageArea": {
					"type": "MultiPolygon",
					"coordinates": [
						[
							[
								[
									-43.36556,
									-22.99669
								],
								[
									-43.36539,
									-23.01928
								],
								[
									-43.26583,
									-23.01802
								],
								[
									-43.25724,
									-23.00649
								],
								[
									-43.23355,
									-23.00127
								],
								[
									-43.2381,
									-22.99716
								],
								[
									-43.23866,
									-22.99649
								],
								[
									-43.24063,
									-22.99756
								],
								[
									-43.24634,
									-22.99736
								],
								[
									-43.24677,
									-22.99606
								],
								[
									-43.24067,
									-22.99381
								],
								[
									-43.24886,
									-22.99121
								],
								[
									-43.25617,
									-22.99456
								],
								[
									-43.25625,
									-22.99203
								],
								[
									-43.25346,
									-22.99065
								],
								[
									-43.29599,
									-22.98283
								],
								[
									-43.3262,
									-22.96481
								],
								[
									-43.33427,
									-22.96402
								],
								[
									-43.33616,
									-22.96829
								],
								[
									-43.342,
									-22.98157
								],
								[
									-43.34817,
									-22.97967
								],
								[
									-43.35142,
									-22.98062
								],
								[
									-43.3573,
									-22.98084
								],
								[
									-43.36522,
									-22.98032
								],
								[
									-43.36696,
									-22.98422
								],
								[
									-43.36717,
									-22.98855
								],
								[
									-43.36636,
									-22.99351
								],
								[
									-43.36556,
									-22.99669
								]
							]
						]
					]
				},
				"address": {
					"type": "Point",
					"coordinates": [
						-43.297337,
						-23.013538
					]
				}
			};

		});

		it("Expected status result to equal 200 when the pub is created", async () => {

			const expectedResultCreate = {
				success: "ok"
			};

			const create = sinon.stub(Pub, "create");
			create.withArgs(body).returns(expectedResultCreate);

			const req = mockReq({ body });
			const res = mockRes();

			const pubController = new PubController(Pub);
			const response = await pubController.create(req, res);

			sinon.assert.calledWith(create, body);
			expect(response.status).to.be.calledWith(values.HTTP_STATUS.OK);
			expect(response.json).to.be.calledWith({
				httpStatus: values.HTTP_STATUS.OK,
				responseCode: values.RESPONSE.PUB_CREATED,
				pdv: expectedResultCreate
			});

			create.restore();

		});

		it("Expected status result to equal 500 when the pub is not created", async () => {

			const create = sinon.stub(Pub, "create");
			create.withArgs(body).rejects();

			const req = mockReq({ body });
			const res = mockRes();

			const pubController = new PubController(Pub);
			const response = await pubController.create(req, res);

			sinon.assert.calledWith(create, body);
			expect(response.status).to.be.calledWith(values.HTTP_STATUS.INTERNAL_ERROR);

			create.restore();

		});

	});
});
