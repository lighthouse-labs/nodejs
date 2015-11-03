//Persistency Layer
//Running Server localhost
// Routes
var dbConnection = require('./server/db');

function startServer(){
    var server = require('./server/app')
    var slack = require('./server/external_apis/slack');
}

dbConnection.then(startServer);

//TODO: not handling error scenario, .catch

//app.get('/',function(req,res){
//    res.send('Hello world!');
//});

//var EventsEmitter = require('events');
//
//var Test = new EventsEmitter();
//
//console.log("Connecting to database");
//
//Test.on("connected",function(){
//    console.log("Connection establish, complete next step");
//});
//
////setTimeout(function(){
//Test.emit("connected");
////}, 3000);
//

