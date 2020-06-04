var models = require("../models");
var asyncLib = require("async");
var jwtUtils = require("../utils/jwt.utils");

const DISLIKED = 0;
const LIKED = 1;

module.exports = {
  likeProject: function(req, res) {
    var headerAuth = req.headers["authorization"];
    var userId = jwtUtils.getUserId(headerAuth);

    var projectId = parseInt(req.params.projectId);

    if (projectId <= 0) {
      return res.status(400).json({ error: "Parametre invalide" });
    }

    asyncLib.waterfall(
      [
        function(done) {
          models.Project.findOne({
            where: { id: projectId }
          })
            .then(function(projectFound) {
              done(null, projectFound);
            })
            .catch(function(err) {
              return res
                .status(500)
                .json({ error: "Unable to verify project" });
            });
        },
        function(projectFound, done) {
          if (projectFound) {
            models.User.findOne({
              where: { id: userId }
            })
              .then(function(userFound) {
                done(null, projectFound, userFound);
              })
              .catch(function(err) {
                return res.status(500).json({ error: "Unable to verify user" });
              });
          } else {
            res.status(404).json({ error: "Vous avez déja liker ce projet" });
          }
        },
        function(projectFound, userFound, done) {
          if (userFound) {
            models.Participant.findOne({
              where: {
                userId: userId,
                projectId: projectId
              }
            })
              .then(function(userAlreadyLiked) {
                done(null, projectFound, userFound, userAlreadyLiked);
              })
              .catch(function(err) {
                return res.status(500).json({
                  error: "Permettre de verifier si user a déjà liker le projet"
                });
              });
          } else {
            res.status(404).json({ error: "User n'existe pas" });
          }
        },
        function(projectFound, userFound, userAlreadyLikedFound, done) {
          if (!userAlreadyLikedFound) {
            projectFound
              .addUser(userFound, { isLike: LIKED })
              .then(function(alreadyLikeFound) {
                done(null, projectFound, userFound);
              })
              .catch(function(err) {
                return res
                  .status(500)
                  .json({ error: "Unable to set user reaction" });
              });
          } else {
            if (userAlreadyLikedFound.isLike === DISLIKED) {
              userAlreadyLikedFound
                .update({
                  isLike: LIKED
                })
                .then(function() {
                  done(null, projectFound, userFound);
                })
                .catch(function(err) {
                  res
                    .status(500)
                    .json({ error: "Impossible de mettre à jour" });
                });
            } else {
              res.status(409).json({ error: "Projet déja liker" });
            }
          }
        },
        function(projectFound, userFound, done) {
          projectFound
            .update({
              likes: projectFound.likes + 1
            })
            .then(function() {
              done(projectFound);
            })
            .catch(function(err) {
              res
                .status(500)
                .json({ error: "Echec de modification du compteur de like" });
            });
        }
      ],
      function(projectFound) {
        if (projectFound) {
          return res.status(201).json(projectFound);
        } else {
          return res.status(500).json({ error: "Cannot update project" });
        }
      }
    );
  },
  dislikeProject: function(req, res) {
    var headerAuth = req.headers["authorization"];
    var userId = jwtUtils.getUserId(headerAuth);
    var projectId = parseInt(req.params.projectId);
    if (projectId < 0) {
      return res.status(400).json({ error: "Parametre invalide" });
    }

    asyncLib.waterfall(
      [
        function(done) {
          models.Project.findOne({
            where: { id: projectId }
          })
            .then(function(projectFound) {
              done(null, projectFound);
            })
            .catch(function(err) {
              return res
                .status(500)
                .json({ error: "Unable to verify project" });
            });
        },
        function(projectFound, done) {
          if (projectFound) {
            models.User.findOne({
              where: { id: userId }
            })
              .then(function(userFound) {
                done(null, projectFound, userFound);
              })
              .catch(function(err) {
                return res.status(500).json({ error: "Unable to verify user" });
              });
          } else {
            res.status(404).json({ error: "Vous avez déja liker ce projet" });
          }
        },
        function(projectFound, userFound, done) {
          if (userFound) {
            models.Participant.findOne({
              where: {
                userId: userId,
                projectId: projectId
              }
            })
              .then(function(userAlreadyLikedFound) {
                done(null, projectFound, userFound, userAlreadyLikedFound);
              })
              .catch(function(err) {
                return res.status(500).json({
                  error: "Permettre de verifier si user a déjà liker le projet"
                });
              });
          } else {
            res.status(404).json({ error: "User n'existe pas" });
          }
        },
        function(projectFound, userFound, userAlreadyLikedFound, done) {
          if (!userAlreadyLikedFound) {
            projectFound
              .addUser(projectFound, { isLike: DISLIKED })
              .then(function(alreadyLikeFound) {
                done(null, projectFound, userFound);
              })
              .catch(function(err) {
                return res
                  .status(500)
                  .json({ error: "Unable to set user reaction" });
              });
          } else {
            if (userAlreadyLikedFound.isLike === LIKED) {
              userAlreadyLikedFound
                .update({
                  isLike: DISLIKED
                })
                .then(function() {
                  done(null, projectFound, userFound);
                })
                .catch(function(err) {
                  res
                    .status(500)
                    .json({ error: "Cannot update user reaction" });
                });
            } else {
              res.status(409).json({ error: "message already disliked" });
            }
          }
        },
        function(projectFound, userFound, done) {
          projectFound
            .update({
              likes: projectFound.likes - 1
            })
            .then(function() {
              done(projectFound);
            })
            .catch(function(err) {
              res
                .status(500)
                .json({ error: "Echec de modification du compteur de like" });
            });
        }
      ],
      function(projectFound) {
        if (projectFound) {
          return res.status(201).json(projectFound);
        } else {
          return res.status(500).json({ error: "Cannot update project" });
        }
      }
    );
  }
};
