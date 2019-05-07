# NodeJS + Express + Mongo + Docker

This application provides a RESTFul api for point-of-sale management of beers, leveraging to exemplify the development of applications with NodeJS, Express, Mongo and Docker.

### Tech

This application uses open source projects to work

* [Node.js] - evented I/O for the backend.
* [Express] - fast node.js network app framework.
* [mochajs] - tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
* [chaijs] -  BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
* [sinonjs] - Standalone test spies, stubs and mocks for JavaScript. 
Works with any unit testing framework.
* [ESLint] - The linting utility for JavaScript.
* [MongoDB] -  MongoDB’s flexible document data model makes working with data intuitive, whether you’re building an app from scratch or updating an existing one.

### Installation

Tha application require [Node.js] v8+ to run.


Clone this repository with git command bellow:

```sh
git clone git@github.com:hugoamac/node-express-mongo-docker.git
```

Install the dependencies and devDependencies and start the server.

```sh
$ cd node-express-mongo-docker
$ npm install -d
$ npm start
```

### Tests


The application was developed using the mocha test execution api and the eslint library as code writing linter. In this way the configuration to execute the tests of the code, you only have to execute the command below.

```sh
npm test
```


### Docker

The application is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd node-express-mongo-docker
docker build -t hugoamac/node-express-mongo-docker .
docker run -p 8080:8080 -d hugoamac/node-express-mongo-docker
```

If you have the installation of docker-compose, then you executing should the commando bellow.

```sh
cd node-express-mongo-docker
docker-compose up -d
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
http://yourdockerip:8080/
```

### Resources

| VERB | Endpoint | README |
| ------ | ------ | ------ |
| GET | / | This resource show welcome |
| GET | /api/pub/:id | This resource retrieves a pub by id |
| POST | /api/pub/ | *This resource creates a new pub |
| POST | /api/pub/search | **This resource retrieves a pub by longitude and latitude  |


*The payload to creates a new pub should be like it:

```json
{
    "tradingName": "Avengers",
    "ownerName": "Peter Parker",
    "document": "00000000000/001",
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
}
```

** The payload tor etrieves a pub by longitude and latitude should be like it:

```json
{
	"longitude":-43.36556,
	"latitude":  -22.99669
}
```


License
----

MIT


**Free Software, Hell Yeah!**