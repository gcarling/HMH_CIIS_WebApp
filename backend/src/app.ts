import * as express from "express";

// Create Express server
const app = express();

app.get('/', (req, res) => {
  console.log('eeyyy lmao');
  res.send('OK');
});

module.exports = app;
