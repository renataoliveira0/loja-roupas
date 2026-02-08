const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

app.get("/produtos", (req, res) => {
  const data = fs.readFileSync("./db.json");
  res.json(JSON.parse(data));
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
