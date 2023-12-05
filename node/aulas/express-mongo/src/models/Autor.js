import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
  id:{type: mongoose.Schema.Types.ObjectId},
  nome: {type: String, required: [true, "O nome do(a) autor(a) é obrigatorio"]},
  nacionalidade: {type: String}
}, {versionKey: false});

//coleção que o modelo representa
const autor = mongoose.model("autores", autorSchema);

export  {autor, autorSchema};