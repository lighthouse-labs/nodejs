
// (APP) ENDPOINT/ROUTES
// (DB) DATABASE - MODELS
// (APP) SERVER

var dbConnectPromise = require('./db');

var startServer = function(){
    var server = require('./app');
    var slack = require('./external_apis/slack/')
};

dbConnectPromise.then(startServer).catch(function(error){
    console.error(error);
});

//startDatabase.then(startServer)





