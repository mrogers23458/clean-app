const { Schema, model } = require('mongoose')

const areaSchema = new Schema (
    {
        areaName: {
            type: String,
        },
        areaDescription: {
            type: String,
        },
        areaOwner: {
            type: String,
        },

        tasks: [{
            taskTitle: {
                type: String
            },

            taskDescription: {
                type: String
            },

            taskComplete: {
                type: Boolean
            },
            
            taskOwner: {
                type: String
            }
        }],
    },
);

const Area = model('Area', areaSchema)

module.exports = Area;