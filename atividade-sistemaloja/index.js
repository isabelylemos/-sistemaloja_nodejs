import express from "express";

const app = express();

import ClientesController from "./controllers/ClientesController.js";
import PedidosController from "./controllers/PedidosController.js";
import ProdutosController from "./controllers/ProdutosController.js";

import connection from "./config/sequelize-config.js";

app.set("view engine", "ejs");

app.use(express.static('public'));

app.use("/", ClientesController);
app.use("/", PedidosController);
app.use("/", ProdutosController);

app.get("/", (req, res) => {
  res.render("index");
});

connection.authenticate().then(()=>{
  console.log("Conexão com o banco de dados feita com sucesso!")
}).catch((error)=>{
  console.log(error)
})

connection.query(`CREATE DATABASE IF NOT EXISTS atividade_loja;`).then(()=>{
  console.log("O banco de dados está criado")
}).catch((error)=>{
  console.log(error)
})

const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
