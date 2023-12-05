import ErroBase from "./ErroBase.js";

class NaoEncontrado extends ErroBase{
  constructor(msg = "Pagina não encontrada"){
    super(msg, 404);
  }
}

export default NaoEncontrado;