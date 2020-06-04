// Imports
var models = require("../models");
var asyncLib = require("async");
var jwtUtils = require("../utils/jwt.utils");
// Constantes

// Routes
module.exports = {
  createProject: function(req, res) {
    // Recuperer Auth Header
    var headerAuth = req.headers["authorization"];
    var userId = jwtUtils.getUserId(headerAuth);

    // Recuperer les parametres
    var title = req.body.title;
    var problem = req.body.problem;
    var description = req.body.description;
    var objectives = req.body.objectives;
    var expectedResults = req.body.expectedResults;
    var tools = req.body.tools;
    var available = req.body.available;

    if (
      title == null ||
      problem == null ||
      description == null ||
      objectives == null ||
      expectedResults == null ||
      available == null
    ) {
      return res
        .status(400)
        .json({ error: "Merci de renseigner les champs requis" });
    }

    if (
      title <= 2 ||
      problem <= 10 ||
      description <= 10 ||
      objectives <= 10 ||
      expectedResults <= 10 ||
      available <= 10
    ) {
      return res
        .status(400)
        .json({ error: "Merci de renseigner les champs requis" });
    }

    asyncLib.waterfall(
      [
        function(done) {
          models.User.findOne({
            where: { id: userId }
          })
            .then(function(userFound) {
                  done(null, userFound);
            })
            .catch(function(err) {
              res.status(500).json({ error: "Recherche infructueuse" });
            });
        },
        function(userFound, done) {
          if (userFound) {
            models.Project.create({
              title: title,
              problem: problem,
              description: description,
              objectives: objectives,
              expectedResults: expectedResults,
              tools: tools,
              available: available,
              likes: 0,
              UserId: userFound.id
            }).then(function(newProject) {
              done(newProject);
            });
          } else {
            res.status(404).json({ error: "User introuvable" });
          }
        }
      ],
      function(newProject) {
        if (newProject) {
          return res.status(201).json(newProject);
        } else {
          return res.status(500).json({ error: "Echec d'envoi du projet" });
        }
      }
    );
  },
  listProject: function(req, res) {
    var fields = req.query.fields;
    var limit = parseInt(req.query.limit);
    var offset = parseInt(req.query.offset);
    var order = req.body.order;

    models.Project.findAll({
        order: [(order != null) ? order.split(":") : ['title', 'ASC']],
        attributes: (fields !== '*' && fields != null) ? fields.split(',') : null,
        limit: (!isNaN(limit)) ? limit : null,
        offset: (!isNaN(offset)) ? offset : null,
        include: [{
            model: models.User,
            attributes: ['name']
        }]
    }).then(function(projects){
        if(projects){
            res.status(200).json(projects);
        } else {
            res.status(404).json({"error": "Aucun projet trouvé"})
        }
    }).catch(function(err){
        console.log(err);
        res.status(500).json({"error": "Champs invalides"});
    })
  }
};
