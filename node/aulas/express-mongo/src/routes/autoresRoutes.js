import express from "express";
import AutorController from "../controllers/AutorController.js";

const routes = express.Router();

routes.get("/autores", AutorController.listarAutors);
routes.get("/autores/:id", AutorController.buscarAutorPorId);
routes.post("/autores", AutorController.cadastrarAutor);
routes.put("/autores/:id", AutorController.atualizarAutor);
routes.delete("/autores/:id", AutorController.deletarAutorPorId);


export default routes;