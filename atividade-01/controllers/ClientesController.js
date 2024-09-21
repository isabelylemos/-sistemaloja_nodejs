import express from "express"
const router = express.Router()

// rota clientes
router.get("/clientes", (req, res) => {
    const listaClientes = [
      { nome: "Isabely Lemos", cpf: "123.456.789-10", endereco: "Av. Interlagos, 79" },
      { nome: "Yasmin Pires", cpf: "132.654.879-11", endereco: "Pacarai, 50" },
      { nome: "Ana Flávia", cpf: "555.444.777-10", endereco: "Av. Barcelona, 41" },
      { nome: "Gustavo Lanna", cpf: "111.452.777-12", endereco: "Carnaúba, 32" },
      { nome: "Lucomara Lemos", cpf: "221.552.667-51", endereco: "23 de Junho, 30" },
      { nome: "João Silva", cpf: "331.444.755-12", endereco: "Jatobá, 22" },
      { nome: "Pedro Henrique", cpf: "333.467.888-13", endereco: "Carnaúba, 32" },
    ];
  
    res.render("clientes", {
      listaClientes: listaClientes
    });
  });
  
  export default router