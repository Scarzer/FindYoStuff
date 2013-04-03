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
    path = require('path'),
    appRoot = __dirname,
    app = express();

// Let's get into the database right here!
mongoose.connect('mongodb://localhost/FindYoStuff');


// Express Configurations

app.configure(function() { 
    app.use(express.logger('dev') ); // Verbosity of the logging
    app.use(express.bodyParser() ); // For future extrapulation of the body
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(appRoot, "statics")));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true}) )
});


// API routes!
app.post('/cow', function(req, res){
    console.log("Post the cow. Hug it as well!");
    res.send("Thank you for the post");
    res.end();
});

app.del('/cow', function(req, res){
    console.log("Delete the cow, make burger!");
    res.send("The damn thing was deleted =[");
    res.end();
});

app.get('/cow', function(req, res){
    console.log("Get the cow. Get the milk. ???. Profit!");
    res.send("Get it!?!");
    res.end();
});

app.put('/cow', function(req, res){
    console.log("PUT THE COW DOWN!!! NAOW!!!");
    res.end();
});

app.options('/cow', function(req, res){
    console.log("We shouldn't be getting this....");
});

app.listen(8000);
console.log("Server was started! Don't worry =]");
