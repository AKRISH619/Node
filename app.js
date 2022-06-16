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
app.use("/", router);
app.listen(process.env.port || 8085);

console.log("Server Started..");