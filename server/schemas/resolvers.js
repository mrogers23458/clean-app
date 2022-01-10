const { CheckResultAndHandleErrors } = require('apollo-server-express');
const {User, Area} = require('../models')
const {signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        users: async () => {
          return User.find().populate('areas');
        },

        user: async (parent, { email }) => {
            
            console.log('anything new')
            console.log(email)
            console.log({ email })
            const user = User.findOne({email}).populate('areas')
            console.log(user)
            
          return User.findOne({ email }).populate('areas')
    
        }, 

        areas: async (parent, { email }) => {
            const params = email ? { email } : {};
            return Area.find(params).sort({createdAt: -1})
        },

        area: async (parent, { areaId }) => {
          return Area.findOne({ _id: areaId });
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

            await User.findOneAndUpdate(
                { email: areaOwner },
                { $addToSet: {areas: area._id}}
            )
        },

        addTask: async (parent, {taskTitle, taskDescription, taskComplete, taskOwner}) => {
            return Area.findOneAndUpdate(
                {_id: areaId},
                {
                    $addToSet: {
                        tasks: { taskTitle, taskDescription, taskComplete, taskOwner }
                    }
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        }
    } 
}

module.exports = resolvers