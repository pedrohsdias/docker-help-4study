class ErroBase extends Error{
  constructor (mensagem = "Erro interno do servideo", status = 500){
    super();
    this.message = mensagem;
    this.status = status;
  }

  enviarRespostas(res) {
    res.status(this.status).send({
      mensagem: this.message,
      status: this.status
    });
  }
}

export default ErroBase;