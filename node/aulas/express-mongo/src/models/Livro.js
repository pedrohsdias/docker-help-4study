import mongoose from "mongoose";
// import { autorSchema } from "./Autor.js";
import autopopulate from "mongoose-autopopulate";

//template  pro ORM
const livrosSchema = new mongoose.Schema({
  id:{type: mongoose.Schema.Types.ObjectId},
  titulo: {type: String, required: [true, "O titulo do livro é obrigatorio"]},
  editora: {
    type: String,
    required: [true, "A editora é obrigatoria"],
    enum: {
      values: ["Casa do codigo","Alura"],
      message: " A {VALUE} não é um valor permitido"
    }
  },
  preco: {type: Number},
  paginas: {
    type: Number,
    validate: {
      validator: (valor)=> {
        return valor >= 10 && valor <= 5000;
      },
      message: "o numero de paginas deve estar entre 10 e 5000, valor fornecido {VALUE}"
    },
    // min: [10, "O numero de paginas minimo é 10, vc informou {VALUE}"],
    // max: 10000
  },
  // autor: autorSchema
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O autor é obrigatorio"],
    autopopulate: true// configuração para o plugin de populate
    // autopopulate: { select: "nome" } // pupula o relacionament apenas com o nome
  }
}, {versionKey: false});
//usa o plugin para pupular os relacionamentos
livrosSchema.plugin(autopopulate)
//coleção que o modelo representa
const livro = mongoose.model("livros", livrosSchema);

export default livro;
