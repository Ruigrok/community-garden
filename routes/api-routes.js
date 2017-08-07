
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
        db.Order.create(req.body).then(function (response) {
            res.json(response);
        });
    });

    var orderData;

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
                    allVeg.push(dbVeggies[j].name);
                }

                for (var i = 0; i < dbOrder.length; i++) {

                    var vegImages = [];

                    var orderedVeggies = dbOrder[i].veggies;

                    orderedVeggies.forEach(function (x) {
                        vindex = allVeg.indexOf(x);
                        vegImages.push(dbVeggies[vindex].loc);
                    })

                    var vegString = dbOrder[i].veggies.join(",");

                    var order = {
                        id: dbOrder[i].id,
                        veggies: vegString,
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
    app.put("/api/orders/:id", function (req, res) {
        var vegArray = req.body.veggies.split(",");

        db.Order.update(
            {
                veggies: vegArray,
                collected: req.body.collected
            },
            {
                where: {
                    id: req.params.id
                }
            }).then(function (result) {

                res.redirect("/orders");
            });
    });

    app.delete("/api/orders/:id", function (req, res) {
        var vegArray = req.body.veggies.split(",");

        db.Order.destroy(
            {
                where: {
                    id: req.params.id
                }
            }).then(function (dbPost) {
                res.redirect("/orders");
            });
    });


};



