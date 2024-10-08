import express from "express";
const router = express.Router();
import cliente from "../models/Clientes.js";

// rota clientes
router.get("/clientes", (req, res) => {
    cliente.findAll().then((cliente => {
      res.render("clientes", {
        cliente : cliente
      })
    }))
});

// rota cadastro


  export default router