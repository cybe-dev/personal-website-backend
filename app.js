const express = require("express");
const app = express();
const server = require("http").Server(app);
const port = process.env.PORT || 8080;

//middleware
const cors = require("cors");
const bodyParser = require("body-parser");

//router
const skill = require("./routers/skill");
const portfolio = require("./routers/portfolio");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/skill", skill);
app.use("/portfolio", portfolio);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Rest API");
});

server.listen(port);
