import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";

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




class Apollo extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>My First Apollo app </h2>
        </div>
      </ApolloProvider>
    );
  }
}

export default Apollo;
