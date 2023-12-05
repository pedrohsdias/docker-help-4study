import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ErroValidacao from "../erros/ErroValidacao.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next){
  console.log(erro);
  if(erro instanceof mongoose.Error.CastError){
    new RequisicaoIncorreta(). enviarRespostas();
  }else if(erro instanceof mongoose.Error.ValidationError){
    new ErroValidacao(erro).enviarRespostas(res);
  }else if(erro instanceof NaoEncontrado){
    erro.enviarRespostas(res);
  }else if(erro instanceof ErroBase){
    erro.enviarRespostas(res);
  }else{
    new ErroBase() .enviarRespostas(res);
  }
}

export default manipuladorDeErros;