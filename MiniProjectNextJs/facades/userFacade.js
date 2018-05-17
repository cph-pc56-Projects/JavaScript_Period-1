require("../dbSetup.js").connect();
var mongoose = require("mongoose");
var User = require("../models/user");

async function getAllUsers() {
  return await User.find({}).exec();
}

async function addUser(firstName, lastName, userName, password) {
  const userDetail = { firstName, lastName, userName, password };
  const user = new User(userDetail);
  return await user.save();
}

async function findByUsername(username) {
  return await User.findOne({ userName: username }).exec();
}

async function findById(id) {
  return await User.findOne({_id: id}).exec();
}

module.exports = {
  getAllUsers: getAllUsers,
  addUser: addUser,
  findByUsername: findByUsername,
  findById: findById
}

// testing functions
// async function getData() {
//   const users = await getAllUsers();
//   console.log(users);
// }
// getData();
// async function add() {
//   await addUser('Peter', "VanDyk", 'pv', 'password');
//   getData();
// }

// async function find() {
//   const user = await findByUsername('pv');
//   console.log("Found User:", user);
// }

// async function findWithId(id) {
//   const user = await findById(id);
//   console.log("USer with ID:", user);
// }
// findWithId('5ae63149ac72ae4f8cb4e414');