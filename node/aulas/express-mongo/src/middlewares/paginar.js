import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
async function paginar(req, res,next){
    try{
        // const {limite = 5, pagina = 1, campoOrdenacao = "_id", ordem = -1} = req.query;
        const {limite = 5, pagina = 1, ordenacao = "_id:-1"} = req.query;

        limite = parseInt(limite);
        pagina = parseInt(pagina);
        // ordem = parseInt(ordem);
        let [campoOrdenacao, ordem] = ordenacao.split(":");//atalho pra cada uma pegar uma chave do array
        const resultado = req.resultado;
        if(limite > 0 && pagina > 0  ) {
            const resultadoPaginado = await resultado
            // .sort({_id: -1})
            // .sort({_id: -1})
            .sort({[campoOrdenacao]: ordem})//para o nome ndo campo dinamicamente
            .skip((pagina - 1) * limite)
            .limit(limite)
            .populate("autor")
            .exec;
            res.status(200).json(livroEncontrado); 
        }else{
            next(new RequisicaoIncorreta())
        }
    }catch(erro){
        next(erro);
    }
}
export default paginar