const express = require('express');
const bodyParser = require('body-parser');
const cors =  require('cors');
const db = require("./app/models");
const app = express();

const path = __dirname + "/app/views" ;
app.use(express.static(path));
console.log(path);

// const TagController = require("./app/controller/tag.controller");
// const TutorialController = require("./app/controller/tutorial.controller");
// const tutorial = require('./app/routes/tutorial');


var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));

//simple route
app.get('/', function(req, res) {
    res.sendFile(path + 'index.html');
});

db.sequelize.sync()
.then(() => {
    console.log("Good to Go");
    // run();
});

// set port, listen for requests
require("./app/routes/api/tutorial.route")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});
























// const run = async () => {
// //  try {
//   const tut1 = await TutorialController.create({
//     title: "Tut#1",
//     description: "Tut#1 Description",
//   });
 
  
//   const tut2 = await TutorialController.create({
//     title: "Tut#2",
//     description: "Tut#2 Description",
//   });
  
//   const tut3 = await TutorialController.create({
//     title: "Tut#3",
//     description: "Tut#3 Description",
//   });
  
//   const tut4 = await TutorialController.create({
//     title: "Tut#4",
//     description: "Tut#4 Description",
//   });
//   const tag1 = await TagController.create({
//     name: "Tag#1",
//   });
 
//   const tag2 = await TagController.create({
//     name: "Tag#2",
//   });

//   await TagController.addTutorial(tag1.id, tut1.id);
// // >> added Tutorial id=1 to Tag id=1

// await TagController.addTutorial(tag1.id, tut2.id);
// // >> added Tutorial id=2 to Tag id=1

// await TagController.addTutorial(tag1.id, tut3.id);
// // >> added Tutorial id=3 to Tag id=1

// await TagController.addTutorial(tag2.id, tut3.id);
// // >> added Tutorial id=3 to Tag id=2

// await TagController.addTutorial(tag2.id, tut4.id);
// // >> added Tutorial id=4 to Tag id=2

// await TagController.addTutorial(tag2.id, tut1.id);
// // >> added Tutorial id=1 to Tag id=2

// const _tag1 = await TagController.findById(tag1.id);
// console.log(">> tag1", JSON.stringify(_tag1, null, 2));


// const tags = await TagController.findAll();
// console.log(">> tags", JSON.stringify(tags, null, 2));

// const _tut = await TutorialController.findById(tut3.id);
// console.log(">> tut3", JSON.stringify(_tut, null, 2));


// };


