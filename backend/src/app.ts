import * as express from "express";

// Create Express server
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  console.log('eeyyy lmao');
  res.send('poop123123');
});

app.get('/testo', (req, res) => {
  res.send({ test: 'test data' });
});

module.exports = app;
