import express from "express";
import conectaNoBancodeDados from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

const conexao = await conectaNoBancodeDados();

conexao.on("error", (erro) => {
  console.error("erro de conexao", erro);
});

conexao.once("open", ()=>{
  console.log("Conexão  com sucesso");
});

const app = express();

routes(app);
//eles ficam aqui para garantir que erão os ultimos middlewares depois da rotas
app.use(manipulador404);
app.use(manipuladorDeErros);

export default app;

