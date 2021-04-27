const express = require("express");
const router = express.Router();
const data = require("../data/data");

router.post("/new", express.json(), (req, res) => {
  data.newPost(
    req.body.title,
    req.body.description,
    req.body.content,
    req.body.category,
    req.body.imgurl
  );
  res.send("Notícia adicionada com sucesso");
});

router.get("/all", (req, res) => {
  res.send(data.getAll());
});

module.exports = router;
