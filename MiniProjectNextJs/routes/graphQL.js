var express = require('express');
const server = express();
var { schema } = require("../graphql/schema");

const graphqlHTTP = require('express-graphql');

//router.use("/",(req,res)=>{res.end("Add your GraphQL endpoint here")})
server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

module.exports = server;