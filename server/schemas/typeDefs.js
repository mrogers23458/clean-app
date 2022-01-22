const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    areas: [Area]
}

type Area {
    _id: ID
    areaName: String
    areaDescription: String
    areaOwner: String
    tasks: [Task]
}

type Task {
    _id: ID
    taskTitle: String
    taskDescription: String
    taskComplete: Boolean
    taskOwner: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(email: String): User
    me: User
    areas(email: String): [Area]
    area(areaId: ID): Area
}


type Mutation {
    addNewUser(
        firstName: String
        lastName: String
        email: String
        password: String
    ): Auth

    addArea(
        areaName: String
        areaDescription: String,
        areaOwner: String
    ) : Area

    addTask(
        areaId: ID
        taskTitle: String
        taskDescription: String
        taskOwner: String
        taskComplete: Boolean
    ): Area

    updateTask(
        areaId: ID
        taskId: ID
        updatedTaskTitle: String
        updatedTaskDescription: String
        updatedTaskOwner: String
        updatedTaskComplete: Boolean
    ): Area

    removeArea(
        _id: ID
        areaOwner: String
        areaName: String
    ): Area

    removeTask(
        taskId: ID,
        taskTitle: String
        taskDescription: String
        taskComplete: Boolean
    ) : Area

    login(email: String!, password: String!): Auth
}

`;

module.exports = typeDefs