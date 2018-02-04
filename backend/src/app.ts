import * as express from "express";
const bp = require('body-parser');

// Create Express server
const app = express();

// Connection URL
const url = 'mongodb://localhost:27017/myproject';

const MongoClient = require('mongodb').MongoClient
    , assert = require('assert');


let createUser = function (user, callback) {

    MongoClient.connect(url).then((db) => db.collection('users').insertOne({
        'id' : user['id'],
        'firstName' : user['firstName'],
        'lastName' : user['lastName'],
        'phoneNumber' : user['phoneNumber']
    }, function(err, result) {
        console.log('add user success!');
        callback(result)
    }));
};

let getUser = function (id, callback) {
    MongoClient.connect(url).then((db) => db.collection('users').find({
        'id' : id
    }, function(err, result) {
        console.log('add user success!');
        callback(result)
    }));
};

app.use(bp.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/user', (req, res) => {
    console.log('eeyyy lmaooooooooooooooo');
    res.send({
        firstname: 'Lizzie',
        lastname: 'Matusov',
        phoneNumber: 8055586137,
        issues: ['Anxiety', 'Bi-Polar Disorder', 'Depression'],
    })
});

  app.get('/', (req, res) => {
    console.log('eeyyy lmao');
    res.send('poop123123');
});

app.get('/testo', (req, res) => {
    res.send({test: 'test data'});
});

app.get('/user/:id', (req, res) => {
    console.log('pooop');
    getUser('696969', function(result) {
        res.send(result)
    });
});

app.post('/user', (req, res) => {
    console.log('req: ', req);
    console.log('adding initial user');
    createUser(req.body['user'], function(result) {
        res.send('ronnie added!')
    });
});

module.exports = app;
