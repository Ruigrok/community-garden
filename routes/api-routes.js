// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/", function (req, res) {

        Promise.all([
            db.Veggies.findAll({}),
            db.User.findAll({}),
            db.Order.findAll({ include: [db.User] })
        ])
            .spread(function (dbVeggies, dbUser, dbOrder) {
                res.render('./index', { veggies: dbVeggies, users: dbUser, orders: dbOrders });
            })

            .catch(function (err) { console.error(err); });
    });

app.post("/api/users", function (req, res) {
    db.User.create(req.body).then(function () {
        res.redirect("/");
    });
});

  app.post("/api/orders", function (req, res) {
    db.Order.create(req.body).then(function () {
      res.redirect("/");
    });
  });

  // PUT route for updating posts
  app.put("/api/orders", function (req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function () {
        res.redirect("/");
      });
  });

//
};









/* 
var query1 = db.Veggies.findAll({});

var query2 = db.User.findAll({});

var query3 = db.Order.findAll({});

db.Veggies.findAll({})
    .then(function (dbVeggies) {
        res.render("index", { veggies: dbVeggies });
    });

db.User.findAll({})
    .then(function (dbUsers) {
        res.render("index", { users: dbUsers })
    });

db.Order.findAll({})
    .then(function (dbOrders) {
        res.render("index", { orders: dbOrders })
    });

Promise.all([
    db.query('select * from foo where ...'),
    db.query('select * from bar where ...')
])
    .spread(function (foo, bar) {
        /* prepare data as you need them 
        res.render('./index', { foo_table: foo, bar_table: bar });
    });




app.get('/markers', function (req, res) {
    var markers = [];
    var marker1 = { "id": 1, "name": "London" };

    // Get the lat and lng based on the address
    var prom1 = geocoding(marker1.name).then(function (geocode) {
        marker1.lat = geocode[0].latitude;
        marker1.lng = geocode[0].longitude;
        markers.push(marker1);
    }, function (error) {
        console.log(error);
    })

    var marker2 = { "id": 2, "name": "Chicago" };
    var prom2 = geocoding(marker2.name).then(function (geocode) {
        marker2.lat = geocode[0].latitude;
        marker2.lng = geocode[0].longitude;
        markers.push(marker2);
    }, function (error) {
        console.log(error);
    });

    var marker3 = { "id": 3, "name": "Munich" };
    var prom3 = geocoding(marker3.name).then(function (geocode) {
        marker3.lat = geocode[0].latitude;
        marker3.lng = geocode[0].longitude;
        markers.push(marker3);
    }, function (error) {
        console.log(error);
    });
    // return the lat and lng array to the client

    Promise.all([prom1, prom2, prom3]).then(function () { res.json(markers); }).catch(function (err) { console.error(err); });
}) */