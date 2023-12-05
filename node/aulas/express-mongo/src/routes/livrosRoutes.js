import express from "express";
import LivroController from "../controllers/LivroController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();

routes
  .get("/livros", LivroController.listarLivros, paginar)//passa dois middlewares
  .get("/livros/filtro", LivroController.listarLivroPorFiltro)
  .get("/livros/busca", LivroController.listarLivrosPorEditora)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.deletarLivroPorId)
  .delete("/livros/:id", LivroController.deletarLivroPorId);


export default routes;