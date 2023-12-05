import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import {autores as autor, autores  } from "../models/index.js";
import {livro} from "../models/index.js";

class LivroController{
  
  
  static async deletarLivroPorId(req, res, next){  
    try{
      const id = req.params.id;
      livro.findByIdAndDelete(id);
      res.status(201).json({message:"Livro exluido com sucesso"});
    }catch (erro){
      next(erro);
    }
  }

  static async listarLivros(req, res, next){
    try{
      const buscaLivros = livro.find();
      
      req.resultado = buscaLivros;
      next();
      
    }catch (erro){
      next(erro);
    }
  }

  static async listarLivroPorFiltro(req, res, next){
    try{
      const {editora, titulo, nomeAutor} = req.body;
      const regexTitulo  = new RegExp(titulo,"i");// = /parametro/i

      let busca = {};
      if(titulo) busca.titulo= regexTitulo;
      //operador do mongo
      if(editora) busca.editora = { $regex: editora, $options: "i" };// = /parametro/i
      // {
      //   numeroPaginas: {
      //     $gte: 500,
      //     $lte: 1000
      //   }
      // }
      
      if(nomeAutor) {
          const autorA = autor.findOne({ nome: nomeAutor });
          if (autorA !== null) {
            busca.autor = autorA._id;
            const autorId = autorA._id;
            busca.autor = autorId;
        }
      }

      const livroEncontrado = await livro.find(busca).populate("autor");
      res.status(200).json(livroEncontrado); 
      
    } catch (erro){
      next(erro);
    }
  }
    
  static async listarLivroPorId(req, res, next){  
    try{
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id,{}, { autopopulate: false })//desabilita oautopopulate
      .populate("autor");// faz o populate

      res.status(200).json(livroEncontrado); 
    }catch (erro){
      next(erro);
    }
  }
    
  static async atualizarLivro(req, res, next){  
    try{
      const id = req.params.id;
      const listaLivro = await livro.findByIdAndUpdate(id, req.body);
      
      res.status(200).json({message:"Alteração realizada", data: listaLivro}); 

    }catch (erro){
      next(erro);
    }
  }

  static async cadastrarLivro(req, res, next){     
    const novolivro = req.body;

    try{
      const autorEncontrado = await autor.findById(novolivro.autor);
      const livroCompleto = {
        ...novolivro, 
        autor: {...autorEncontrado._doc }
      };
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({message: "criado con sucesso", livro: livroCriado});
    }catch (erro){
      next(erro);
    }
  }

  static async listarLivrosPorEditora(req, res, next){ 
    const editora = req.query.editora;
    try{
      const livrosPorEditora = await livro.find({editora});
      // const livrosPorEditora = await livro.find({editora:editora});
      console.error(livrosPorEditora,req.query.editora);
      
      res.status(200).json(livrosPorEditora); 
    }catch(erro){
      next(erro);
    }
  }
}

export default LivroController;