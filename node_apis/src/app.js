const express = require('express');
const cors = require('cors');
const httpContext = require('express-http-context');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const path = require('path')
// const logger = require('./log/logger');
// const expressLog = require('./log/express-logger');
const addReqId = require('./middlewares/add-reqid');
const terminate = require('./terminate');
var compression = require("compression");
const db = require('./db');
const config = require('./config/dev');
const router = require('./routes');


const app = express();


app.use(cors())
app.options('*', cors());
app.use(compression());

// const app = require('./routes');
app.use(helmet());
app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));
// app.use(helmet.noCache());
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

app.use(bodyParser.json());

// To shutdown the node properly
const exitHandler = terminate(app, {
  coredump: false,
  timeout: 500,
});

process.on('uncaughtException', exitHandler(1, 'Unexpected Error'));
process.on('unhandledRejection', exitHandler(1, 'Unhandled Promise'));
process.on('SIGTERM', exitHandler(0, 'SIGTERM'));
process.on('SIGINT', exitHandler(0, 'SIGINT'));


// Middlewares
app.use(httpContext.middleware);
app.use(addReqId);


initDB();

router(app);

// const tenSecs = 10000;
// const rand =  Math.floor(Math.random() * tenSecs) + tenSecs;
// logger.info(rand);
// setTimeout((function() {
//   return process.exit();
// }), rand);

/**
 *
 *
 */
async function initDB() {
  await db.init(config);
  initServer();
}

app.all("*", (req, res) => {
  res.send("API Request Not Valid. Please check Again.");
});

/**
 *
 *
 */
function initServer() {
  app.listen(3000, () => {
    console.log("Server Started");
  });
}
