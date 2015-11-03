var express = require('express');

var brewerydbAPI = require('../../external_apis/brewerydb');

var router = express.Router();

router.get('/',function(req,res){
    res.send('Hello world!');
});

router.get('/beer',function(req,res){
    var beerName = req.query.q;
    brewerydbAPI(beerName,function(error,data){

        var name = data.name;
        var description = data.description;

        if(error)
            console.error(error)
        else
            res.send(name + ": " + description);
    });

});

module.exports = router;