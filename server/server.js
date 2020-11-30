/* eslint-disable no-console */
const express = require('express');
const mongoCont = require('../controller/mongo/mongo');
const apiCont = require('../controller/api/api');

const app = express();
const PORT = 8100;
app.use(express.json());
app.use(express.static('client/public'));

// users

app.post('/check', mongoCont.checkUser);
app.post('/newUser', mongoCont.addUser);

// movies

app.post('/addMovie', mongoCont.addMovie);
app.get('/topRated', apiCont.getTopRated);

app.listen(PORT, () => { console.log(`Listening on port: ${PORT}`); });
