import * as express from "express";

// Create Express server
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/user', (req, res) => {
  console.log('eeyyy lmaooooooooooooooo');
  res.send( {
    firstname: 'Lizzie',
    lastname: 'Matusov',
    phoneNumber: 8055586137,
    issues: [ 'Anxiety', 'Bi-Polar Disorder', 'Depression'],
  });
});

app.get('/testo', (req, res) => {
  res.send({ test: 'test data' });
});

module.exports = app;
