import mongoose from "mongoose";
import "dotenv/config.js";

async function conectaNoBancodeDados(){
  mongoose.connect(process.env.STRING_CONEXAO_DB);

  return mongoose.connection;

}

export default conectaNoBancodeDados;