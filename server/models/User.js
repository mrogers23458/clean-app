const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true
        }
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