var express = require("express");
var userCtrl = require("./routes/usersCtrl");
var projectCtrl = require("./routes/projectsCtrl");
var participantCtrl = require("./routes/participantsCtrl");

exports.router = (function() {
  var apiRouter = express.Router();

  // User Routes
  apiRouter.route("/users/register/").post(userCtrl.register);
  apiRouter.route("/users/login/").post(userCtrl.login);
  apiRouter.route("/users/me/").get(userCtrl.getUserProfile);
  apiRouter.route("/users/me/").put(userCtrl.updateUserProfile);

  // Project Routes
  apiRouter.route("/projects/new/").post(projectCtrl.createProject);
  apiRouter.route("/projects/all/").get(projectCtrl.listProject);

  // Participant Routes
  apiRouter
    .route("/projects/:projectId/vote/like/")
    .post(participantCtrl.likeProject);
  apiRouter
    .route("/projects/:projectId/vote/dislike/")
    .post(participantCtrl.dislikeProject);

  return apiRouter;
})(); // Permet d'instancier apiRouter
