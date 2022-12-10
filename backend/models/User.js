const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'is required']
    },

    email: {
        type: String,
        required: [true, 'is required'],
        unique: true,
        index: true,
        validate: {
            validator: function(str) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(str);
            },
            message: props => `${props.value} is not a valid email`
        }
    },

    password: {
        type: String,
        required: [true, 'is required']
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]

}, { minimize: false });
const User = mongoose.model('User', UserSchema);
module.exports = User;