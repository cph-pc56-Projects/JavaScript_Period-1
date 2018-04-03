require("./dbSetup.js");

var User = require("./models/user");
var LocationBlog = require("./models/locationBlog");
var Position = require("./models/position");

function userCreate(firstName, lastName, userName, password, type, company, companyUrl) {
  var job = [{ type, company, companyUrl }, { type, company, companyUrl }];
  var userDetail = { firstName, lastName, userName, password, job };
  console.log("Creating Users")
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
  await LocationBlog.remove({});

  var userPromises = [
    userCreate("Kurt", "Wonnegut", "annb", "test", "xxx", "comp", "comp.url"),
    userCreate("b", "d", "acacc", "test2", "yyy", "comp", "comp.url"),
    userCreate("c", "e", "asdasd", "test2", "yyy", "comp", "comp.url"),
    userCreate("d", "f", "acasdasdcc", "test2", "yyy", "comp", "comp.url"),
    userCreate("e", "gassa", "accc", "test2", "yyy", "comp", "comp.url")
  ];
  var users = await Promise.all(userPromises);

  var positionPromises = [
    positionCreator(123, 123, users[0]._id),
    positionCreator(123, 123, users[1]._id),
    positionCreator(123, 123, users[2]._id),
    positionCreator(123, 123, users[3]._id),
    positionCreator(123, 123, users[4]._id)
  ];
  var positions = await Promise.all(positionPromises);

  var locationPromises = [
    LocationBlogCreator('Cool Place', users[0]._id, 26, 148),
    LocationBlogCreator('Another Cool Place', users[0]._id, 27, 248),
    LocationBlogCreator('Yet Another Cool Place', users[0]._id, 27, 248),
    LocationBlogCreator('THe Coolest Place', users[3]._id, 127, 218)
  ];

  var blogs = await Promise.all(locationPromises);
  console.log(users);
  console.log(positions);
  console.log(blogs);

}
createUsers();
