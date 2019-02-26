require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user.route");

//initialize our express app
const app = express();

// Set up mongoose connection
const mongoose = require("mongoose");
let dev_db_url = process.env.DB_URL;
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/users", user);

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));

let port = 1234;

app.listen(port, () => {
  console.log("Server is up and running on port number " + port);
});
