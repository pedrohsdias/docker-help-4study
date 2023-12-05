const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoasAtivas)
router.get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.delete('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
router.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)
router.delete('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)
router.post('/pessoas', PessoaController.criaPessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', PessoaController.apagaPessoa)
router.delete('/pessoas/:id/matricula', PessoaController.pegaMatriculas)
router.post('/pessoas/:id/restaura/',  PessoaController.restauraPessoa)
router.get('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.apagaMatricula)

module.exports = router