var express = require('express');
var app = express();

app.use('/api',require('./routes'));

var server = app.listen(3000,function(){
    console.log('2. Server is set-up on 3000');
});
//not handling error scenario, .catch

module.exports = server;