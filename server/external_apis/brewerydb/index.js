debugger;
//http://api.brewerydb.com/v2/search?key=ae82fa10d2d43dc247e63c72177b9ff4&type=beer&q=peroni
//http://localhost:3000/beer?q=peroni
//req.query.q

var request = require('request');
var BREWERY_API_KEY = require('../../env/development').BREWERY_API_KEY;


var brewerydbAPI = function(query,callback){

    var url = "http://api.brewerydb.com/v2/search?key="+BREWERY_API_KEY+"&type=beer&q=" + query;

    request(url,function(error,response,body){
        if(error)
            callback(error,null)
        else{
            var data = JSON.parse(body).data[0];            callback(null,data)
        }
    });

}

module.exports = brewerydbAPI