const { AuthenticationError } = require('apollo-server-express');
const {User, Area} = require('../models')
const {signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        users: async () => {
          return User.find().populate('areas');
        },

        user: async (parent, { email }) => {
            const user = User.findOne({email}).populate('areas')
            
          return User.findOne({ email }).populate('areas')
    
        }, 

        // By adding context to our query, we can retrieve the logged in user without specifically searching for them
        me: async (parent, args, context) => {
            if (context.user) {
            return User.findOne({ _id: context.user._id }).populate('areas');
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        areas: async (parent, { email }) => {
            const params = email ? { email } : {};
            return Area.find(params).sort({createdAt: -1})
        },

        area: async (parent, { areaName }) => {
            return Area.findOne( { areaName } )
        },

      },
    

    Mutation: {
        addNewUser: async (parent, {firstName, lastName, email, password}) => {

            const user = await User.create({ firstName, lastName, email, password});
            const token = signToken(user)

            return { token, user}
        },

        addArea: async (parent, { areaName, areaDescription, areaOwner}) => {
            const area = await Area.create({areaName, areaDescription, areaOwner})

            console.log(area)
            await User.findOneAndUpdate(
                { email: areaOwner },
                { $addToSet: {areas: area._id}}
            )

            return ( area )
        },

        addTask: async (parent, {id, taskTitle, taskDescription, taskComplete}) => {
            return Area.findOneAndUpdate(
                {_id: id}, 
                {
                    $addToSet: {
                        tasks: { taskTitle, taskDescription, taskComplete }
                    }
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },

        login: async (parent, {email, password}) => {
            const loggedIn = await User.findOne({ email });

            if (!loggedIn) {
                throw new AuthenticationError('No account with this e-mail found')
                
            }

            const checkPass = await loggedIn.isCorrectPassword(password)

            if (!checkPass) {
                throw new AuthenticationError('Incorrect Password test test test')
            }

            const token = signToken(loggedIn)

            return { token, loggedIn}
        },

        removeArea: async (parent, {id, areaName, areaOwner}) => {
            console.log(areaName, areaOwner, id)
            const area = await Area.findOneAndDelete({areaName: areaName})
            console.log('area is below')
            console.log(area)
            
            console.log(area._id)
            const user = await User.findOneAndUpdate(
                { email: areaOwner},
                { $pull: {areas: area._id}}
                )
                
                
                console.log('user is here ', user)
                
            return ( area )
        },

    } 
}

module.exports = resolvers