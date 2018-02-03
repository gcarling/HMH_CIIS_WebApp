import * as express from "express";

// Create Express server
const app = express();

app.get('/', (req, res) => {
  console.log('eeyyy lmao');
  res.send('poop123123');
});

module.exports = app;
