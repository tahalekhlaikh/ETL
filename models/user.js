const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength:1,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        minlength:1,
        unique: true,
        trim: true,
         match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email'
      ]
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    role: {
        type: String,
        default: 'User',
        enum: ['User', 'Admin'] // Accept only these roles
    },
  isActive: {
    type: String,
    default: 'Rejected',
    enum: ['Accepted', 'Rejected']
  },
});




UserSchema.plugin(uniqueValidator);


module.exports = mongoose.model('User', UserSchema);
