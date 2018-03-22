// The template on how to define a SCHEMA
var mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstName: String, 
    lastName: {type: String, minlength: 2},
    password: {type: String, required: true},
    created: {type: Date, default: Date.now()},
    modified: Date
});

UserSchema.virtual('fullinfo').get(function(){
    return this.firstName + ", "+ this.lastName;
});

UserSchema.pre('save', () => {
    this.modified = new Date();
})

UserSchema.pre('save', () => {
    this.password = `***** ${this.password} *****`;
})

let User = mongoose.model("User", UserSchema);

module.exports = User;