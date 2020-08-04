const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const helmet = require('helmet');
// callback fv-ből promise és vissza
const { promisify } = require('util');
const http = require('http');
const { privateRouter, publicRouter } = require('./router');
const { port } = require('../config');
const logger = require('../logger');

const app = express();
// az app-ot átadjuk a createServer-nek, így csinálunk callback-ből promise-t
const server = http.createServer(app);

// milyen URL-, domain-n keresztül érhető ez a komponens
// cors-t a böngésző biztosítja, postman és társaiból továbbra is elérhető az alklamzás CORS nélül
app.use(cors());
app.use(bodyParser.json());
//app.use(helmet());

// csinálunk egy middleware-t, egy logger middleware
app.use((req, res, next) => { 
  logger.debug(`${req.method} ${req.url} at ${new Date()}`);
  next();
})

// itt mondjuk meg az app-nak hogy használja is a router-t
app.use(publicRouter);
// itt már authentikálni kell
app.use(privateRouter);

// csinálunk egy middleware-t error handle-re, callbck-be az err-t adjuk meg 1st
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
    
  res.status(500);
  return res.end({
    message: 'Hiba történt',
  });
});

// app.listen(port, (err) => {
//   if (err) {
//     logger.error(err);
//     process.exit(1);
//   }
//   logger.info(`Az alkalmazas a következő URL-en érhető el: http://localhost:${port}`);
// });
// server.listen alapvetően beveszi paraméterként a server, port-ot
// callback-ről promise-á alakítjuk
const listenPromise = promisify(server.listen.bind(server, port));

module.exports = {
  init: listenPromise,
}