var request = require('request');
var BREWERY_DB_API_KEY = require('../../env/development.js').BREWERY_DB_API_KEY;
var Promise = require('bluebird');

var breweryAPI = function(searchQuery){
    var promise = new Promise(function(resolve,reject){
        var endpoint = "http://api.brewerydb.com/v2/search?key="+ BREWERY_DB_API_KEY +"&q="+searchQuery+"&type=beer";

        request(endpoint,function (error, response, body) {
            if(error)
                reject(error);

            if(JSON.parse(body).data[0] && JSON.parse(body).data[0].description)
                resolve(JSON.parse(body).data[0]);
            else
                resolve("No description found");
        });
    });

    return promise;
};

module.exports = breweryAPI;