```bash
npm install express pg pg-hstore sequelize path

npm install --save-dev nodemon sequelize-cli  

npx sequelize-cli init    
#"type": "commonjs",

npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string

npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo # desfaas a ultima
db:migrate:undo --name nodeDaMigration.js # desafa especifica

npx sequelize-cli seed:generate --name demo-pessoa

npx sequelize-cli db:seed:all
npx sequelize db:seed:undo// desfaz o ultimo
npx sequelize-cli db:seed:undo --seed nome-do-arquivo
npx sequelize-cli db:seed:undo:all // desafaz todos os seeds

npm outdated
```