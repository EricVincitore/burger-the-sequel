var db = require("../models");

function controller (app) {
    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function (data) {
            res.render("index", {burgers:data})
        })
    });

    app.post("/api/burger", function (req, res) {
        db.Burger.create(req.body).then(function (data) {
            res.render("index", {burgers:req.body})
        })
    })
};

module.exports = controller;