import express from "express";
import ProdutoController from "../Controllers/produtosController.js";

const router = express.Router();

router
    .get("/produtos", ProdutoController.getProdutos)
    .get("/produtos/:id", ProdutoController.getProdutosId)
    .post("/produtos", ProdutoController.addProduto)
    .put("/produtos/:id", ProdutoController.editProduto)
    .delete("/produtos/:id", ProdutoController.deleteProduto)
export default router;
