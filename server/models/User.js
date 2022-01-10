const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        areas:[ 
            {
                type: Schema.Types.ObjectId,
                ref: 'Area'
            }
        ]
    },
    //use virtual
    {
        toJSON: {
          virtuals: true,
        },
    }
);

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  const User = model('User', userSchema);
  
  module.exports = User;