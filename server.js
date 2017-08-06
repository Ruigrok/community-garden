// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var nodemon = require("nodemon");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

// Requiring data
var vegData = require("./public/js/data-veg.js")
var userData = require("./public/js/data-user.js")
var orderData = require("./public/js/data-order.js")

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Set Handlebars
var exphbs = require('express-handlebars');

var hbs = exphbs.create({
  defaultLayout: 'main',
  // Specify helpers which are only registered on this instance
  helpers: {
    grouped_each: function (every, context, options) {
      var out = "", subcontext = [], i;
      if (context && context.length > 0) {
        for (i = 0; i < context.length; i++) {
          if (i > 0 && i % every === 0) {
            out += options.fn(subcontext);
            subcontext = [];
          }
          subcontext.push(context[i]);
        }
        out += options.fn(subcontext);
      }
      return out;
    },
    
  }
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function () {

  db.Veggies.bulkCreate(vegData).then(function () {
    return db.Veggies.findAll();
  });

  db.User.bulkCreate(userData).then(function () {
    return db.User.findAll();
  })

  db.Order.bulkCreate(orderData).then(function () {
    return db.Order.findAll();
  })

  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

