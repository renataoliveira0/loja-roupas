const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json()); // 👈 NOVO

app.get("/produtos", (req, res) => {
  try {
    const filePath = path.join(__dirname, "db.json");
    const data = fs.readFileSync(filePath, "utf-8");
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ erro: "Erro ao carregar produtos" });
  }
});

// 👇 NOVO
app.post("/pedidos", (req, res) => {
  try {
    const filePath = path.join(__dirname, "pedidos.json");
    const pedidos = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const novoPedido = {
      id: Date.now(),
      itens: req.body.itens,
      total: req.body.total,
      data: new Date().toLocaleString()
    };

    pedidos.push(novoPedido);
    fs.writeFileSync(filePath, JSON.stringify(pedidos, null, 2));

    res.json({ sucesso: true });
  } catch (error) {
    res.status(500).json({ erro: "Erro ao salvar pedido" });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
