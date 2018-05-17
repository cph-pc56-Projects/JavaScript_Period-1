// import ApolloClient from "apollo-boost";
// import gql from "graphql-tag";
const ApolloClient = require('apollo-boost');
const gql = require('graphql-tag');


const client = new ApolloClient({
    uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

client
    .query({
        query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
    })
    .then(result => console.log(result));