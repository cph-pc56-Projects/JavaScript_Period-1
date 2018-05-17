require("../dbSetup.js").connect();
var mongoose = require("mongoose");
var locationBlog = require("../models/locationBlog");

async function getAllLocationBlogs() {
  return await locationBlog.find({}).exec();
}

function addLocationBlog(author, info, longitude, latitude) {
  var blog = new LocationBlog({ info, pos: { longitude, latitude }, author });
  return blog.save();
}

function findBlog(id, options, populate) {
  console.log("ID", id);
  const p = LocationBlog.findById(id, options);
  if (populate) {
    return p.populate("author", populate).exec();
  }
  return p.exec();
}

function findBlogsByAuthor(authorId, options, populate) {
  const p = LocationBlog.find({ author: authorId }, options);
  if (populate) {
    return p.populate("author", populate).exec();
  }
  return p.exec();
}

async function likeBlog(blogId, authorId) {
  const p = await LocationBlog.findById(blogId);
  if (p.likedBy.indexOf(authorId) >= 0) {
    throw Error("You have already liked this blog");
  }
  p.likedBy.push(authorId);
  return p.save();
}

module.exports = {
  getAllLocationBlogs: getAllLocationBlogs,
  addLocationBlog: addLocationBlog,
  findBlog: findBlog,
  findBlogsByAuthor: findBlogsByAuthor,
  likeBlog: likeBlog,
}


// async function getData() {
//   const locationBlogs = await getAllLocationBlogs();
//   console.log(locationBlogs);
// }
// getData();