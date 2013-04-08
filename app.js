/**
 * Created with JetBrains WebStorm.
 * User: ventrius
 * Date: 3/21/13
 * Time: 11:05 PM
 * Version: 0.0.2
 *
 * Resource     POST                    GET                 PUT              DELETE
 *
 * /tag       create new             lists user's          NULL             Remove all tagged devices
 *            tagged device          tagged devices
 *
 * /tag/1234    NULL                 Shows info for       if exists,
 *                                   tag 1234             edit 1234;       Removes 1234
 *                                                        else NULL
 */


var express = require('express'),
    mongoose = require('mongoose'),
    db = mongoose.createConnection('localhost', 'test');
    path = require('path'),
    appRoot = __dirname,
    app = express();


var tagSchema = new mongoose.Schema({
    id : String,
    givenName : String,
    parent : [{ id: String, givenName: String}],
    isLost : Boolean,
    lastLocation : Number
});

var randomThing = {
    1 : {
        name : "Tag"+1,
        number : "1234",
        lastLoc : 2141124,
        timeAdded: 1000000000
    },

    2 : {
        name : "Tag"+2,
        number : "54321",
        lastLoc : 123131,
        timeAdded : 1000000000
    },

    3 : {
        name : "Tag"+3,
        number : "9asdf18231",
        lastLoc : 912341,
        timeAdded : 1000000000
    }
}

// Let's get into the database right here!
mongoose.connect('mongodb://localhost/FindYoStuff');


// Express Configurations

app.configure(function(){
    app.use(express.logger('dev') ); // Verbosity of the logging
    app.use(express.bodyParser() ); // For future extrapulation of the body
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(appRoot, "statics")));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true}) )
});


// API routes!



app.post('/tag/', function(req, res){
    // For an empty PUT request for tag
    // This should return an error
    res.send("I'm sorry, but that is incorrect, you cannot write ");
    res.end();
})

app.post('/tag/:id', function(req, res){
    // IDed request for tag
    // This should be creating a new tag
    var idNum = req.params.id;
    console.log("Post the cow. Hug it as well!");
    console.log("The requested tag is: " + idNum);
    randomThing[idNum] = {
        name : "Tag"+idNum,
        number : getRandomInt(100000, 10000000),
        lastLoc : getRandomInt(1000,100000),
        timeAdded : Date.now()
    }
    res.send("Thank you for the post");
    res.end();
});

app.del('/tag/', function(req, res){
    "use strict";
    // For a general DEL request for tag
    console.log("You shouldn't be trying to delete everything");
    res.send("NO! You can't delete everything!");
    res.end();
})


app.del('/tag/:id', function(req, res){
    // IDed DELETE request for tag
    // This will delete the named ID
    console.log("Delete the cow, make burger!");
    console.log("The requested tag is: " + req.params.id)
    res.send("The damn thing was deleted =[");
    res.send(req.params.id);
    res.end();
});

app.get('/tag/', function(req, res){
    "use strict";
    // None IDed GET request for tag
    // This will get all current tags
    var idNum = req.params.id;
    console.log("There would be a lot of things here");
    console.log("The requested tag is: " + idNum);
    res.send(randomThing);
    res.end();
})

app.get('/tag/:id', function(req, res){
    // IDed GET request for tag
    // This will get a specific tag
    var idNum = req.params.id;
    console.log("Get the cow. Get the milk. ???. Profit!");
    console.log("The requested tag is: " + idNum);
    res.send( { idNum : randomThing[idNum]});
    res.end();
});

app.put('/tag/', function(req, res){
    "use strict";
    console.log("SOOOO, that's great but there isn't much you can do here");
    res.send("We are not updating everything");
    res.end();
})

app.put('/tag/:id', function(req, res){
    console.log("PUT THE COW DOWN!!! NAOW!!!");
    console.log("The requested tag is: " + req.params.id);
    res.send("Updating!~");
    res.end();
});


app.listen(8000);
console.log("Server was started! Don't worry =]");




// Various Functions to be eventually moved
function getRandomInt(min, max){
    "use strict";
    return Math.floor( Math.random() * (max - min + 1) + min);
}