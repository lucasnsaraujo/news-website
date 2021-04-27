const express = require("express");
const server = express();
const routes = require("./routes/routes");
const data = require("./data/data");

server.use(express.urlencoded({ extended: true }));
server.use("/api", routes);
server.use(express.static(__dirname + "/views"));
server.set("view engine", "ejs");

server.get("/", (req, res) => {
  res.render("index", { data: data.data });
});
server.get("/newpost", (req, res) => {
  res.render("newpost");
});

server.get("/news/:id", (req, res) => {
  const datalist = data.data;
  let thisNews = datalist.find((item) => item.id === String(req.params.id));
  console.log(thisNews);
  res.render("news", { thisNews });
});
server.listen(5000, () => {
  console.log(">> server is running on port 5000");
});
