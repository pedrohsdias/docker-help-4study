const Services = require('../services/Services')
const database = require('../models')
const {MatriculasService} = require('../services')

class PessoasServices extends Services{
    constructor(){
        super('Pessoas')
        this.matriculas = new MatriculasService();
    }

    async pegaRegistrosAtivos(where = {}){
        return database[this.nomeDoModelo].findAll({where: {...where}})
    }

    async pegaTodosOsRegistros(where = {}){
        return database.Pessoas.scope('todos').findAll({where: {...where}})
    }

    async cancelaPessoaEMatriculas(estudanteId){
        return database.sequelize.transaction(async transacao => { 
          await super.atualizaRegistro({ ativo: false }, estudanteId, { transaction: transacao })
          await this.matriculas.atualizaRegistros({ status: 'cancelado' }, { estudante_id: estudanteId }, { transaction: transacao })
        })
      }
}
module.export = PessoasServices