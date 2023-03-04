const express = require("express");
const serverless = require("serverless-http");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();
const router = express.Router();

app.set('view engine', 'ejs');

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//mongoose.connect("mongodb+srv://admin-vadimirsvs:10012015aq@cluster0.y2f6gkt.mongodb.net/todolistDB");

router.get("/", (req, res) => {
    res.json({
        'hello': 'hi'
    });
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);

