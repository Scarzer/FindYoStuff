/**
 * Created with JetBrains WebStorm.
 * User: ventrius
 * Date: 3/21/13
 * Time: 11:05 PM
 * Version: 0.0.2
 */

var express = require('express');

var app = express();

app.configure(function() { 
    app.use(express.logger('dev') ); // Verbosity of the logging
    app.use(express.bodyParser() ); // For future extrapulation of the body
});


// API routes!


app.listen(8000);
