var express = require('express');
var bodyParser = require('body-parser');
// var methodOverride = require('method-override')

var port = process.env.PORT || 3000;

var app = express();

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// app.use(express.static('public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controllers.js');

app.use('/', router);

// Open Server

app.listen(port, function() {
    console.log("App now listening at localhost:" + PORT);
  });