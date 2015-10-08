var express = require('express');
var app = express();

//var PORT = NODE.process.env.port || 1338;

app.use('/api',require('./routes'));

////REQ: Request
////RES: Response
//app.get('/',function(req,res){
//    res.send("Hello World");
//});

app.listen(3000, function(){
    console.log('2. Server is started on port 1338');
});

module.exports = app;