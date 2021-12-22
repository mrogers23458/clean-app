const { AuthenticationError } = require('apollo-server-express');
const User = require('../models')

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },

        user: async (parent, { email } ) => {
            return User.findOne({email: email})
        }
    },

    Mutation: {
        addNewUser: async (parent, {firstName, lastName, email, password}) => {

            console.log({firstName, lastName, email, password})
            const user = await User.create({ firstName, lastName, email, password});
            console.log(user)
            return (user)
        }
    } 
}

module.exports = resolvers