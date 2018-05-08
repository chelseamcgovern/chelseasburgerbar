/* Purpose of this script:
   Controller setup
    1. Inside your burger directory, create a folder named controllers.
    2. In controllers, create the burgers_controller.js file.
    3. Inside the burgers_controller.js file, import the following:
        ◦ Express
        ◦ burger.js
    4. Create the router for the app, and export the router at the end of your file.
*/

/* Bring in the clowns... aka express
*/
var express = require("express");
var router = express.Router();

/* Import model burger.js for its functions
*/
var burger = require("../models/burger.js");

/* Create a bunch of routers and whatever logic is required
*/

/* GET Function
*/
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
/* POST Function
*/
router.post("/", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});

/* PUT Function
*/
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

/* DELETE Function
*/
router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});

/* Export routers for the server
*/
module.exports = router;