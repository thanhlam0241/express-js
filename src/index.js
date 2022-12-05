// import express from 'express';
// import { engine } from 'express-handlebars';

// const app = express();

// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', './views');

// app.get('/', (req, res) => {
//     res.render('home');
// });

// app.listen(3000);

const express = require("express");
const app = express();
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const port = 3000;
const path = require("path");
// const fetch = require("node-fetch");
const route = require("./routes");
const db = require("./config/db");

//connect db
db.connect();

app.use(express.static(path.join(__dirname, "public")));

//middleware for form
app.use(express.urlencoded({ extended: true }));

//SML, HTTP request, fetch, axious, .... (middleware for javascript)
app.use(express.json());

//HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
console.log("PATH: ", path.join(__dirname, "resources/views"));

//routes Initialize
route(app);

app.listen(port, () => console.log("App listening on port " + port));
