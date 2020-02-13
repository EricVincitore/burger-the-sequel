var db = require("../models");

function controller (app) {
    app.get("/", function (req, res) {
        db.Burger.findAll().then(function (data) {
            var hbsObject = {
                burgers: data
            };
            console.log(hbsObject)
            res.render("index", hbsObject)
        });
    });

    app.post("/api/burger", function (req, res) {
        db.Burger.create(req.body).then(function (data) {
            res.render("index", {burgers:req.body})
        });
    });

    app.put("/api/burger/:id", function (req, res) {
        db.Burger.update(req.body, {
            where:{
                id:req.params.id
            }
        }).then(function (data) {
            if (res.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.json(data);
        });
    });

    app.delete("/api/burger/:id", function (req, res) {
        console.log(req.params.id)
        db.Burger.destroy({
            where:{
                id: req.params.id
            }
        }).then(function (data) {
            res.json(data);
        });
    });
    
};

module.exports = controller;