import mongoose, { mongo } from 'mongoose';
let dbURI = 'mongodb://pcatana:calarashi@ds155699.mlab.com:55699/learnql';
// Mongo Connection

mongoose.Promise = global.Promise;
mongoose.connect(dbURI);

const friendSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    contacts: {
        type: Array
    },

});

const Friends = mongoose.model('friends', friendSchema);

export {
    Friends
}