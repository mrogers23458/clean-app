const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String!
    password: String!
}

type Query {
    users: [User]
    user(email: String!): User
}

type Mutation {
    addNewUser(
        firstName: String
        lastName: String
        email: String
        password: String
    ): User
}

`;

module.exports = typeDefs