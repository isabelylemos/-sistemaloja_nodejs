import express from "express";

const app = express();

import ClientesController from "./controllers/ClientesController.js";
import PedidosController from "./controllers/PedidosController.js";
import ProdutosController from "./controllers/ProdutosController.js";

app.set("view engine", "ejs");

app.use(express.static('public'));

app.use("/", ClientesController);
app.use("/", PedidosController);
app.use("/", ProdutosController);

app.get("/", (req, res) => {
  res.render("index");
});

const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
