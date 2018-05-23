# Period 4

#### Explain shortly about GraphQL, it purpose and some of it’s use cases
GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and undersandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools. 


#### Explain some of the Server Architectures that can be implemented with a GraphQL backend
Having the GraphQL talk with the MongoDB. Resolver, maps the link to the database and the schema of GraphQL defines the types of the data being parsed. 
#### What is meant by the terms over-, and under-fetching in relation to REST
`Over-fetching` is fetching too much data, aka as there is data in the response you don't use.   
`Under-fetching` is not having enough data with a call to an endpoint, leading you to call a second endpoint.    

In both cases, they are performance issues: you either use more bandwith than you should, or you are making more HTTP requests than you should.    
These problems often appear when you scale and iterate on your products, The data you use on your pages often change, and the cost to maintain a separate endpoint with exactly the right data for each component becomes too much.    
So you end up with a compromise between not having too much endpoints and having endpoints fit need best. This will lead to over-fetching in some cases (the endpoint will provide more data that you need for your specific component), and under-fetching in others (you will need to call a second endpoint).   

    So GraphQL fixes this problem because it allows access to an arbitrary set of data exposed by the server. You specifically specify what you need and will get this data, and only this data, in one trip to the server.


#### Explain shortly about GraphQL’s type system and some of the benefits we get from this
Simple query language that allows to fetch fields from objects. It's close to a javascript object notation.    
Example:   
Defining the schema

    `type Character {
        name: String!
        appearsIn: [Episode]!
    }`
Querying the schema:

    `Query {
        Character{
            name
            appearsIn
        }
    }`
    
It allows us to easily change our query if we need to. With this, we can evolve our API according to our needs. 
#### Explain shortly about GraphQL Schema Definition Language, and provide an number of examples of schemas you have defined.
Examples:

    const typeDefs = `
        type Job {
            type: String
            company: String
            companyUrl : String
        }
        scalar DateTime
        type User {
            _id: ID
            firstName: String
            lastName: String
            userName : String
            job: [Job]
            created : DateTime
            lastUpdated : DateTime
        }
        type Query {
            getAllUsers : [User]
            
        }
    `
#### Provide a number of examples demonstrating data fetching with GraphQL. You should provide examples both running in a Sandbox/playground and examples executed in an Apollo Client
Example:

    import gql from "graphql-tag";
        import { Query } from "react-apollo";

        const GET_NAMES = gql`
        {
            getAllUsers {
                firstName
            }
        }
        `;

        const NAMES = ({ names }) => (
            <Query query={GET_NAMES}>
                {({ loading, error, data }) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;
                    console.log('data', data)
                    return (
                        <div>
                            {data}
                        </div>
                    );
                }}
            </Query>
        );
#### Provide a number of examples demonstrating creating, updating and deleting with Mutations. You should provide examples both running in a Sandbox/playground and examples executed in an Apollo Client.
Example:

    Mutation: {
        createFriend: (root, { input }) => {
            const newFriend = new Friends({
                firstName: input.firstName,
                lastName: input.lastName,
                gender: input.gender,
                age: input.age,
                language: input.language,
                email: input.email,
                contacts: input.contacts
            });

            newFriend.id = newFriend._id;

            return new Promise((resolve, object) => {
                newFriend.save((err) => {
                    if (err) reject(err)
                    else resolve(newFriend)
                })
            })
        },
        updateFriend: (root, { input }) => {
            return new Promise((resolve, object) => {
                Friends.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, friend) => {
                    if (err) reject(err)
                    else resolve(friend)
                })
            })
        },
        deleteFriend: (root, { id }) => {
            return new Promise((resolve, object) => {
                Friends.remove({ _id: id }, (err) => {
                    if (err) reject(err)
                    else resolve('Successfully deleted friend')
                })
            })
        }

    }

#### Explain the Concept of a Resolver function, and provide a number of simple example of resolvers you have implemented in a GraphQL Server.
Each field in a GraphQL schema is backed by a resolver.
The structure of the GraphQL server is its schema, an abstract description of the server's capabilities. This structure comes to life with a concrete implementation that determines the server's behaviour. `Resolver functions` are the key components for the implementation.  
In its most basic form, GRAPHQL server will have one resolver function per field in its schema. Each resovler, knows how to fetch the data for its field. Since GraphQL query at its essence is just a collection of fields, all a GraphQL server actually needs to do in order to gather the requested data is invoke all the resovler functions for the fields specified in the query. 
#### In an Apollo based React Component, demonstrate how to perform GraphQL Queries?
Check above
#### In an Apollo based React Component, demonstrate how to perform GraphQL Mutations?
Example:

    const ADD_TODO = gql`
    mutation addTodo($type: String!) {
        addTodo(type: $type) {
        id
        type
        }
    }
    `;


#### Demonstrate and highlight importants part of a “complete” GraphQL app using Express and MongoDB on the server side, and Apollo on the client.
Check [MiniProject](../MiniProjectNextJs)
