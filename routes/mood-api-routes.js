var db = require("../models");

module.exports = function(app) {
  app.get("/api/mood", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Mood
    db.Mood.findAll({
      include: [db.Comments]
    }).then(function(dbMood) {
      res.json(dbMood);
    });
  });

  app.get("/api/mood/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Mood
    db.Mood.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Comments]
    }).then(function(dbMood) {
      res.json(dbMood);
    });
  });

  app.post("/api/mood", function(req, res) {
    db.Mood.create(req.body).then(function(dbMood) {
      res.json(dbMood);
    });
  });
};