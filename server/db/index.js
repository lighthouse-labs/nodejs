console.log('db file loaded');

var mongoose = require('mongoose');
var Promise = require('bluebird');

//Database is hosted on a separate local server
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

var dbConnectionPromise = new Promise(function(resolve,reject){
    db.on('open',function(){
        console.log("1. Connected to database, what's next?");
        resolve(); //success
    });

    db.on('error',function(e){
        console.error('Something went wrong',e);
        reject(e); //failure
    });
});

module.exports = dbConnectionPromise;

