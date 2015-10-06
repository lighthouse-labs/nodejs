var Slack = require('slack-client');
var breweryAPI = require('../brewery/');

var SLACK_API_TOKEN = require('../../env/development.js').SLACK_API_TOKEN;

var autoReconnect = true;
var autoMark = true;

var slack = new Slack(SLACK_API_TOKEN, autoReconnect, autoMark);

//debugger;

slack.on('message',function(message){
    //debugger;
    var channel = slack.getChannelGroupOrDMByID(message.channel);
    //console.log(message.text);
    var user = slack.getUserByID(message.user);

    //console.log(user);
    //console.log(message);
    //@U0BT5PHU4 is the name of the slack bot so you only respond when asked
    if(message.text.includes("@U0BT5PHU4")){
        breweryAPI(message.text).then(function(beer){
            //res.send({
            //    name:data[1].name,
            //    description:data[1].description
            //})
            debugger;
            channel.send(beer.name +": "+beer.description);
        }).catch(function(error){
            debugger;
            console.error(error);
            //res.status(400).send({message:"Unable to complete search, please try again later"})
            return channel.send("Unable to complete search, please try again later")
        });
    }

});

slack.on('error', function(error) {
    console.error("Error", error);
});

slack.on('connect', function(){
    // leave all channels you are connected to
    var key;
    for (key in slack.channels) {
        if (slack.channels[key].is_member) {
            slack.channels[key].leave();
        }
    }
});

slack.login();

module.exports = slack;