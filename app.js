const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const mongoClientConnect = require('mongo-client-connect');
mongoClientConnect('mongodb://dgcbooks-api:DGC12345@ds121225.mlab.com:21225/dgcbooks-api').then(db => {});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.set('port' , process.env.PORT || 3000);

app.get("*", (req,res) => {
	res.status(200).send({message: 'Welcome to DGC API'});
})

app.listen(app.get('port'), () => {
	console.log('app running on port '+""+app.get('port'));
});

module.exports = app;
