var bcrypt = require("bcrypt");
var jwtUtils = require("../utils/jwt.utils");
var models = require("../models");
var asyncLib = require("async");
// Se rendre ici https://emailregex.com/
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// Se rendre ici http://regexlib.com/Search.aspx?k=password&AspxAutoDetectCookieSupport=1
//Password must be at least 4 characters, no more than 8 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
module.exports = {
  register: function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    //var isAdmin = req.body.isAdmin;
    var role = req.body.role;
    var presentation = req.body.presentation;
    if (email == null || name == null || password == null) {
      return res
        .status(400)
        .json({ error: "Merci de renseigner ses parametres" });
    }
    if (name.length > 45 || name.length < 3) {
      return res.status(400).json({
        error: "Le taille du nom doit être comprise entre 3 et 45 caracteres"
      });
    }
    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({
        error: "Adresse mail invalide"
      });
    }
    if (!PASSWORD_REGEX.test(password)) {
      return res.status(400).json({
        error:
          "Le taille du mot de passe doit être comprise entre 4 et 8 caracteres et doit contenir une majuscule, une minuscule et un chiffre "
      });
    }

    asyncLib.waterfall(
      [
        function(done) {
          models.User.findOne({
            attributes: ["email"],
            where: { email: email }
          })
            .then(function(userFound) {
              done(null, userFound);
            })
            .catch(function(err) {
              return res
                .status(500)
                .json({ error: "Merci de verifier si l'utilisateur existe" });
            });
        },
        function(userFound, done) {
          if (!userFound) {
            bcrypt.hash(password, 5, function(err, bcryptedPassword) {
              done(null, userFound, bcryptedPassword);
            });
          } else {
            return res.status(400).json({ error: "L'utilisateur existe déjà" });
          }
        },
        function(userFound, bcryptedPassword, done) {
          var newUser = models.User.create({
            name: name,
            email: email,
            password: bcryptedPassword,
            isAdmin: 0,
            role: role,
            presentation: presentation
          })
            .then(function(newUser) {
              done(newUser);
            })
            .catch(function(err) {
              return res
                .status(500)
                .json({ error: "Echec d'insertion d'un utilisateur" });
            });
        }
      ],
      function(newUser) {
        if (newUser) {
          return res.status(201).json({ userId: newUser.id });
        } else {
          return res.status(500).json({ error: "Echec d'insertion" });
        }
      }
    );
    /* models.User.findOne({
      attributes: ["email"],
      where: { email: email }
    })
      .then(function(userFound) {
        if (!userFound) {
          bcrypt.hash(password, 5, function(err, bcryptedPassword) {
            var newUser = models.User.create({
              name: name,
              email: email,
              password: bcryptedPassword,
              isAdmin: 0,
              role: "USER",
              presentation: presentation
            })
              .then(function(newUser) {
                return res.status(201).json({
                  userId: newUser.id
                });
              })
              .catch(function(err) {
                return res
                  .status(500)
                  .json({ error: "Echec d'insertion d'un utilisateur" });
              });
          });
        } else {
          return res.status(400).json({ error: "L'utilisateur existe déjà" });
        }
      })
      .catch(function(err) {
        return res
          .status(500)
          .json({ error: "Merci de verifier si l'utilisateur existe" });
      });*/
  },
  login: function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    if (email == null || password == null) {
      return res
        .status(400)
        .json({ error: "Merci de renseigner les parametres de connexion" });
    }

    asyncLib.waterfall(
      [
        function(done) {
          models.User.findOne({
            where: { email: email }
          })
            .then(function(userFound) {
              done(null, userFound);
            })
            .catch(function(err) {
              return res.status(500).json({ error: "Erreur systeme" });
            });
        },
        function(userFound, done) {
          if (userFound) {
            bcrypt.compare(password, userFound.password, function(
              errBcrypt,
              resBcrypt
            ) {
              done(null, userFound, resBcrypt);
            });
          } else {
            return res.status(404).json({ error: "User introuvable" });
          }
        },
        function(userFound, resBcrypt, done) {
          if (resBcrypt) {
            done(userFound);
          } else {
            return res.status(404).json({ error: "User introuvable" });
          }
        }
      ],
      function(userFound) {
        if (userFound) {
          return res.status(200).json({
            userId: userFound.id,
            token: jwtUtils.generateTokenForUser(userFound),
            name: userFound.name
          });
        } else {
          return res.status(403).json({ error: "Echec de connexion" });
        }
      }
    );

    /*models.User.findOne({
      where: { email: email }
    })
      .then(function(userFound) {
        if (userFound) {
          bcrypt.compare(password, userFound.password, function(
            errBcrypt,
            resBcrypt
          ) {
            if (resBcrypt) {
              return res.status(200).json({
                userId: userFound.id,
                token: jwtUtils.generateTokenForUser(userFound)
              });
            } else {
              return res.status(403).json({ error: "Echec de connexion" });
            }
          });
        } else {
          return res.status(404).json({ error: "User introuvable" });
        }
      })
      .catch(function(err) {
        return res.status(500).json({ error: "Erreur systeme" });
      });*/
  },
  getUserProfile: function(req, res) {
    var headerAuth = req.headers["authorization"];
    var userId = jwtUtils.getUserId(headerAuth);

    if (userId < 0) return res.status(400).json({ error: "Token invalide" });

    models.User.findOne({
      attributes: ["id", "name", "email", "role", "presentation"],
      where: { id: userId }
    })
      .then(function(user) {
        if (user) {
          res.status(201).json(user);
        } else {
          res.status(404).json({ error: "User introuvable" });
        }
      })
      .catch(function(err) {
        res.status(500).json({ error: "Merci de revoir la requête" });
      });
  },
  updateUserProfile: function(req, res) {
    var headerAuth = req.headers["authorization"];
    var userId = jwtUtils.getUserId(headerAuth);

    var presentation = req.body.presentation;
    asyncLib.waterfall(
      [
        function(done) {
          models.User.findOne({
            attributes: ["id", "presentation"],
            where: { id: userId }
          })
            .then(function(userFound) {
              done(null, userFound);
            })
            .catch(function(err) {
              return res.status(500).json({ error: "Enable to verify user" });
            });
        },
        function(userFound, done) {
          if (userFound) {
            userFound
              .update({
                presentation: presentation
                  ? presentation
                  : userFound.presentation
              })
              .then(function() {
                done(userFound);
              })
              .catch(function(err) {
                res.status(500).json({ error: "Echec de mise à jour" });
              });
          } else {
            res.status(404).json({ error: "User introuvable" });
          }
        }
      ],
      function(userFound) {
        if (userFound) {
          return res.status(201).json(userFound);
        } else {
          return res.status(500).json({
            error: "Impossible de modifier le profile de l'utilisateur"
          });
        }
      }
    );
  }
};
