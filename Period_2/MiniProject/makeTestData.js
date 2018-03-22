require("./dbSetup.js");

var User = require("./models/user");
var LocationBlog = require("./models/locationBlog");
var Position = require("./models/position");

function userCreate(firstName, lastName, userName, password, type, company, companyUrl) {
  var job = [{ type, company, companyUrl }, { type, company, companyUrl }];
  var userDetail = { firstName, lastName, userName, password, job };
  console.log("sldfjaslkjflska")
  var user = new User(userDetail);
  return user.save();
}

function positionCreator(lon, lat, userId) {
  var posDetail = { user: userId, loc: { coordinates: [lon, lat] } };
  var position = new Position(posDetail);
  return position.save();
}

function LocationBlogCreator(info, author, longitude, latitude) {
  var LocationBlogDetail = { info, pos: { longitude, latitude }, author };
  var blog = new LocationBlog(LocationBlogDetail);
  return blog.save()
}

async function createUsers() {
  await User.remove({});
  await Position.remove({});

  var userPromises = [
    userCreate("a", "b", "annb", "test", "xxx", "comp", "comp.url"),
    userCreate("b", "d", "acacc", "test2", "yyy", "comp", "comp.url"),
    userCreate("c", "e", "asdasd", "test2", "yyy", "comp", "comp.url"),
    userCreate("d", "f", "acasdasdcc", "test2", "yyy", "comp", "comp.url"),
    userCreate("e", "gassa", "accc", "test2", "yyy", "comp", "comp.url")
  ]
  var users = await Promise.all(userPromises);

  var positionPromises = [
    positionCreator(123, 123, users[0]._id),
    positionCreator(123, 123, users[1]._id),
    positionCreator(123, 123, users[2]._id),
    positionCreator(123, 123, users[3]._id),
    positionCreator(123, 123, users[4]._id)
  ]
  var positions = await Promise.all(positionPromises);

  console.log(users);
  console.log(positions);
  
}
createUsers();
