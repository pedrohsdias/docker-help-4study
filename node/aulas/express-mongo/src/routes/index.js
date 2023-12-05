import express from "express";
import livrosRoutes from  "./livrosRoutes.js";
import autoresRoutes from "./autoresRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("curso de Node.js"));
  app.use(express.json(), livrosRoutes);//add tipo middleware, pmeiro o middlware pra converter o body  em json e depois as rotas como middlewere
  app.use(express.json(), autoresRoutes);//add middleware
};

export default routes;