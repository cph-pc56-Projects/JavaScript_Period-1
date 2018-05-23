import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";
import Names from '../components/QueryDemo1';

async function getUsers() {
    const client = new ApolloClient({
        uri: "http://127.0.0.1:3000/api/graphql"
    });

    const users = await client
        .query({
            query: gql`
      {
        getAllUsers {
            firstName
        }
      }
    `
        });
        console.log(users);
    return { users }
}
    // const client = new ApolloClient({
    //     uri: "http://127.0.0.1:3000/api/graphql"
    // });

    // client
    //     .query({
    //         query: gql`
    //     {
    //         getAllUsers {
    //             firstName
    //         }
    //     }
    //     `
    //     })
    //     .then(result => console.log(result.data));




class Apollo extends Component {
    static async getInitialProps() {
        const data = await getUsers();
        console.log("data in Props:", data)
        return { data }
    }

    render() {
        const firstNames = this.props.data.users.data.getAllUsers;
        console.log("firstNames", firstNames);
        return (
            <ApolloProvider client={getUsers()}>
                <div>
                    <h2>My First Apollo app </h2>
                    {firstNames.map((name) => {
                        return (
                            <p>{name.firstName} </p>
                        )
                    })}
                </div>
            </ApolloProvider>
        );
    }
}

export default Apollo;
