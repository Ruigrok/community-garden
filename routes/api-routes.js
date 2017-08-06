
var db = require("../models");
var express = require("express");



// Routes
// =============================================================
module.exports = function (app) {

    app.get("/", function (req, res) {

        var query1 = db.Veggies.findAll({})
        var query2 = db.User.findAll({})

        Promise.all([
            query1,
            query2
        ])
            .then(function ([dbVeggies, dbUser]) {
                res.render('index', { veggies: dbVeggies, users: dbUser });
            })
    });

    app.post("/api/users", function (req, res) {
        db.User.create(req.body)
            .then(function (response) {
                res.json(response);
            });
    });

    app.post("/api/orders", function (req, res) {
        db.Order.create(req.body).then(function () {
            res.json(response);
        });
    });

    app.get("/orders", function (req, res) {

        var query1 = db.Veggies.findAll({});
        var query2 = db.Order.findAll({ include: [db.User] })

        Promise.all([
            query1,
            query2
        ])
            .then(function ([dbVeggies, dbOrder]) {

                var allVeg = [];
                var orderData = [];

                for (var j = 0; j < dbVeggies.length; j++) {
                    allVeg.push(dbVeggies[j].name)
                }

                for (var i = 0; i < dbOrder.length; i++) {

                    var vegImages = [];

                    var orderedVeggies = dbOrder[i].veggies;

                    orderedVeggies.forEach(function (x) {
                        vindex = allVeg.indexOf(x);
                        vegImages.push(dbVeggies[vindex].loc)
                    })

                    var order = {
                        id: dbOrder[i].id,
                        veggies: dbOrder[i].veggies,
                        collected: dbOrder[i].collected,
                        name: dbOrder[i].User.name,
                        vegImages: vegImages
                    }
                    orderData.push(order);
                }
                //res.json(orderData);
                res.render('orders-display', { orders: orderData });

            });
    });


    // PUT route for updating posts
/*     app.put("/api/orders/:id", function (req, res) {
        db.Order.update({
            collected: req.body.collected
        },
            {
                where: {
                    id: req.body.id
                }
            }).then(function () {
                res.redirect("/");
            });
    }); */

    //
};


/* router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update({
    sleepy: req.body.sleepy
  }, condition, function() {
    res.redirect("/orders");
  });
});
 */
