var express = require('express');
var cors = require('cors');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')
// Booking.js still needs access to jquery, so make sure its available
// var $ = require('jquery');
// app.listen(process.env.PORT || 8000, function(){
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });
//
//
//
// // Servce static files to client
// app.use(express.static(path.join(__dirname, 'public')));


var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(process.env.PORT || 3000, function(){
    console.log('Server running on some port...');
});
