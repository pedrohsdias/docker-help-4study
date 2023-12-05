
import app from "./src/app.js";
import "dotenv/config.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log("servidor escutando!");
});

//--------------server na unha
// import http from "http"
// const PORT = 3000

// const rotas = {
//     "/": "Curso de Node.js",
//     "/livros": "Rota de livros"

// }
// const server = http.createServer((req,res) => {
//     res.writeHead(200, {"Content-Type": "text/palin"})
//     res.end(rotas[req.url])
// })

// server.listen(PORT,() =>{
//     console.log("servidor escutando")
// })