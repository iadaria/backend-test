1 Generate entity from existed DB https://github.com/Kononnable/typeorm-model-generator
> npm i -g typeorm-model-generator
generatge > typeorm-model-generator -h 23.251.140.101 -d amir_db -u amir_db -x Jaeh5ithaisi -e postgres -o ./outputs

2 Можем запускать запросы в  http://localhost:4000/graphql 
Здесь мы видим документацию DOCS и SCHEMA описываем мы entity
Get query 
{
  getIncome(input: {id:12}) {
    ok,
    income {
      fund,
      amount
    }
  }
}