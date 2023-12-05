const database = require('../models')

class Services{
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo
    }

    async pegasTodosOsRegistros(){
        return database[this.nomeDoModelo].findAll()
    }

    async pegasUmRegistro(id){
        return database[this.nomeDoModelo].findOne({ 
            where: { 
              id: Number(id) 
            }
          })
    }

    async atualizaRegistro(dadosAtualizados, id, transacao={}){
        return database[this.nomeDoModelo].update(dadosAtualizados,{where:{id:id}},transacao)
    }

    async atualizaRegistros(dadosAtualizados, where, transacao={}){
        return database[this.nomeDoModelo].update(dadosAtualizados,{where:{...where}},transacao)
    }

    async apagaRegistro(){
        return database[this.nomeDoModelo].findAll()
    }
}

module.exports = Services