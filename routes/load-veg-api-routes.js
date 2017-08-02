// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the posts
    app.get("/", function (req, res) {

        db.Veggies.findAll({})
            .then(function (dbVeggies) {
                res.render("index", { veggies: dbVeggies });
            });
    });

};

