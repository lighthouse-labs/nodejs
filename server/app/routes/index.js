//SET CONFIG FILE
var express = require('express');
var router = express.Router();
var breweryAPI = require('../../external_apis/brewery');

debugger;

//var endpoint = "http://api.brewerydb.com/v2/search?key="+ BREWERY_DB_API_KEY +"&q=Peroni&type=beer";

//REQ: Request
//RES: Response
///api/

router.get('/',function(req,res){
    res.send("Hello World");
});

router.get('/beer',function(req,res){
   //debugger;

    breweryAPI(req.query.name).then(function(beer){
        res.send(beer);
    }).catch(function(error){
        console.error(error);
    });
});

module.exports = router;

