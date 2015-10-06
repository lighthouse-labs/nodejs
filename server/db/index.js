var mongoose = require('mongoose');
var Promise = require('bluebird');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

var promise = new Promise(function(resolve,reject){
    db.on('error',function(error){
        console.error(error);
        reject(error);
    });

    db.on('open',function(){
        console.log("1. Connected to database");
        resolve();

    });
});

module.exports = promise;