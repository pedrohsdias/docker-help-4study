// const database = require('../models')
// const Sequelize = require('sequelize')
const {PessoasServices} = require('../services')
const pessoasServices = new PessoasServices()

class PessoaController {
  static async pegaTodasAsPessoasAtivas(req, res){
    try {
      const todasAsPessoas = await pessoasServices.pegasTodosOsRegistros()
      return res.status(200).json(todasAsPessoas)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaTodasAsPessoas(req, res){
    try {
      const todasAsPessoas = await database.Pessoas.scope('todos').findAll()
      // const todasAsPessoas = await database.Pessoas.scope('outros').findAll()
      return res.status(200).json(todasAsPessoas)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmaPessoa(req, res) {
    const { id } = req.params
    try {
      const umaPessoa = await database.Pessoas.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umaPessoa)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaPessoa(req, res) {
    const novaPessoa = req.body
    try {
      const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
      return res.status(200).json(novaPessoaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaPessoa(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Pessoas.update(novasInfos, { where: { id: Number(id) }})
      const pessoaAtualizada = await database.Pessoas.findOne( { where: { id: Number(id) }})
      return res.status(200).json(pessoaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaPessoa(req, res) {
    const { id } = req.params
    try {
      const transacao = await Sequelize.transaction()
      
      await database.Pessoas.destroy(
        { where: { id: Number(id) }},
        { transaction: transacao }
      )
      await database.Pessoas.destroy(
        { where: { id: Number(id) },force:true},
        { transaction: transacao }
      )
      await transacao.commit();
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      await transacao.rollback()
      return res.status(500).json(error.message)
    }
  }

  static async restauraPessoa(req, res) {
    const { id } = req.params
    try {
      await database.Pessoas.retore({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} restaurado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      const umaMatricula = await database.Matriculas.findOne( { 
        where: { 
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      })
      return res.status(200).json(umaMatricula)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaMatricula(req, res) {
    const { estudanteId } = req.params
    const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
    try {
      const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
      return res.status(200).json(novaMatriculaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    const novasInfos = req.body
    try {
      await database.Matriculas.update(novasInfos, { 
        where: { 
          id: Number(matriculaId),
          estudante_id: Number(estudanteId) 
        }})
      const MatriculaAtualizada = await database.Matriculas.findOne( { where: { id: Number(matriculaId) }})
      return res.status(200).json(MatriculaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      await database.Matriculas.destroy({ where: { id: Number(matriculaId) }})
      return res.status(200).json({ mensagem: `id ${matriculaId} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  
  static async pegaMatriculas(req, res) {
    const { id } = req.params
    try {
      const pessoa = await database.Pessoas.findOne( { 
        where: { 
          id: Number(id) 
        }
      })

      const matriculas  = await pessoa.getAulasMatriculadas()

      return res.status(200).json(matriculas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  
  static async pegaMatriculasPorTurma(req, res) {
    const { turmaId } = req.params
    try {
      const todasASMatriculas = await database.Matriculas.findAndCountAll()( { 
        where: { 
          turma_id: Number(turmaId),
          status: 'confirmado'
        },
        limit: 3,
        order:[['estudante_id','ASC']]
      })

      return res.status(200).json(todasASMatriculas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  
  static async pegaTurmasLotadas(req, res) {
    const { lotacaoTurma } = 2
    try {
      const todturmarLotadas = await database.Matriculas.findAndCountAll()( { 
        where: {
          status: 'confirmado'
        },
        atributes: ['turma_id'],
        group:['turma_id'],
        having: Sequelize.literal(`count(turma_id)>= ${lotacaoTurma}`)
      })

      return res.status(200).json(todturmarLotadas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  
  static async cancelaPessoa(req, res) {
    const { estudanteId } = req.params
    try {
      database.sequelize.transactions(async transacao =>{
        await database.Pessoas.update(
          {ativo:false}, 
          {where:{id:Number(estudanteId)}},
          {transection: transacao}
        )
        await database.Matriculas.update(
          {status:'cancelado'},
          {where:{estudante_id:Number(estudanteId)}},
          {transection: transacao}
        )
  
        return res.status(200).json(todasASMatriculas)

      })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = PessoaController