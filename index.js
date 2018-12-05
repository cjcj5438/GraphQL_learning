import express from "express"
import graphqlHTTP from "express-graphql"
import schema from "./schema"
const app=express()
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true// 使用客户端;
}))
app.listen(3333)