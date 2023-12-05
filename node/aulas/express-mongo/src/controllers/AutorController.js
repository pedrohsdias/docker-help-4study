
import NaoEncontrado from "../erros/NaoEncontrado.js";
import { autores } from "../models/index.js";

class AutorController{
  
  
  static async deletarAutorPorId(req, res, next){  
    try{
      const id = req.params.id;
      autores.findByIdAndDelete(id);
      res.status(201).json({message:"Autor exluido com sucesso"});
    }catch (erro){
      next(erro);
    }
  }
    
  static async buscarAutorPorId(req, res, next){  
    try{
      const id = req.params.id;
      const autorEncontrado = await autores.findById(id);

      if(autorEncontrado!==null){
        res.status(200).json(autorEncontrado); 
      }else{        
        next(new NaoEncontrado("Id não encontrado"));
      }
    }catch (erro){
      next(erro);
    }
  }
    
  static async atualizarAutor(req, res, next){  
    try{
      const id = req.params.id;
      const listaAutor = await autores.findByIdAndUpdate(id, req.body);
      
      res.status(200).json({message:"Alteração realizada", data: listaAutor}); 

    }catch (erro){
      next(erro);
    }
  }
    
  static async listarAutors(req, res, next){  
    try{
      const listaAutors = await autores.find({});
      res.status(200).json(listaAutors); 
    }catch (erro){
      next(erro);
    }
  }

  static async cadastrarAutor(req, res, next){      
    try{
      const novoautor = await autores.create(req.body);
      res.status(201).json({message: "criado con sucesso", autor: novoautor});
    }catch (erro){
      next(erro);
    }
  }

}

export default AutorController;