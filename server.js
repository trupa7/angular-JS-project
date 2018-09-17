var express = require("express");
var app = express();
app.use(express.static("myapp")); // myApp will be the same folder name.
app.get("/", function (req, res,next) {
 res.redirect("/");
});

const routes = require("./routes/api");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");


//connect to db
mongoose.connect("mongodb://admin:admin1@ds157522.mlab.com:57522/osathlete", {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;

app.use(bodyparser.json());
app.use("/api", routes);

//error handling middleware
app.use(function(err, req, res, next) {
  // console.log(err);
  res.status(422).send({ error: err.message });
});
//listen for request
app.listen(process.env.port || 4003, function() {
  console.log("now listening for req");
});
