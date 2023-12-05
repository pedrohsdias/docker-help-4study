import chalk from 'chalk'
import fs from 'fs';

// const chalk = require('chalk')// forma antiga de importar , deprecated

console.log(chalk.blue('Ola mundo'));

function trataErro(erro){
    throw new Error(chalk.red(erro.doce, 'erro nmo diretorio'));
}

function pregaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding,(erro, texto)=>{
        
        if(erro){
            trataErro(erro)
        }

        console.log(chalk.green(texto));
    })
}

pregaArquivo('./arquivos/texto.md')