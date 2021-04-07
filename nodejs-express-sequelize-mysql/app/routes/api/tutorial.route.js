module.exports = app => {
  const tutorial = require("../../controller/tutorial.controller")
  var router = require("express").Router();


  // Create new tutorial
  router.post("/", tutorial.create);
  // Find all tutorials
  router.get("/", tutorial.findAll);
  // Find one tutorial
  router.get('/:id', tutorial.findOne)
  // Update tutorial
  router.put("/:id", tutorial.update);
  // Delete a tutorial
  router.delete("/:id", tutorial.delete);
  // Delete all tutorials
  router.delete("/", tutorial.deleteAll);

    
  app.use('/api/tutorial', router)
};






/*
const tutorials = require("../controller/tutorial.controller.js");

//   // router.post('/', function() {console.log('this is a POST');});
//   // router.get('/', function() {
//   //   console.log('this is a GET');
//   //   res.writeHead(200);res.end();
// });
var express = require('express');
var router = express();

  // Create a new Tutorial
  router.post('/', function(req,res) {
  tutorials.create;
  res.send({ response: "ok"})
  })
  // Retrieve all Tutorials
  // router.get("/", tutorials.findAll);
     router.get('/', function(req,res) {
       res.render(tutorials.create);
     })                  
  // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", function() {
    tutorials.update
  });

  // Delete a Tutorial with id
  router.delete("/:id", function(req,res) {
    console.log("DELETE tutorial")
    Review.findByIdandDelete(req.params.id).then(() => {
      res.redirect('/');
    }).catch((err) => {
       console.log(err.message);
    })
  });
  // Delete all Tutorials
  router.delete("/", function(req,res) {
    console.log("DELETE tutorials")
    tutorials.destroy(
     { where: {},
       truncate: false 
      }).then(() => {
      res.redirect('/');
    }).catch((err) => {
       console.log(err.message);
    })
  });

  
    module.exports = router;
  */