const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();

app.set("view engine", "pug");
app.set("/", path.join(__dirname, "/"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/display", function (req, res) {
  res.sendFile(path.join(__dirname, "display.html"));
});

const port = process.env.PORT || 8085;

app.listen(port,()=>{
console.log("Server Started..");
});
