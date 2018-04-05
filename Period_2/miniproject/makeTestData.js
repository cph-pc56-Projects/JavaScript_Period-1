require("./dbSetup.js").connect();

var User = require("./models/user");
var LocationBlog = require("./models/locationBlog");
var Position = require("./models/position");

function userCreate(firstName, lastName, userName, password, type, company, companyUrl) {
  var job = [{ type, company, companyUrl }, { type, company, companyUrl }];
  var userDetail = { firstName, lastName, userName, password, job };
  var user = new User(userDetail);
  return user.save();
}

function positionCreator(lon, lat, userId, keep) {
  var posDetail = { user: userId, loc: { coordinates: [lon, lat] } };
  if (keep) {
    posDetail.created = "2022-09-25T20:40:21.899Z";
  }
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
    userCreate("aafa", "sfsdf", "dfsdf", "test", "xxx", "comp", "comp.url"),
    userCreate("fsaf", "sfsdf", "fsfsf", "test", "xxx", "comp", "comp.url"),
    userCreate("afasfaafa", "sfssfdf", "sfsfs", "test", "xxx", "comp", "comp.url"),
    userCreate("aaafasffa", "fsf", "teteter", "test", "xxx", "comp", "comp.url")
  ]

  var users = await Promise.all(userPromises);
  var posPromises = [
    positionCreator(123, 123, users[0]._id),
    positionCreator(123, 123, users[1]._id),
    positionCreator(123, 123, users[2]._id),
    positionCreator(123, 123, users[3]._id),
    positionCreator(123, 123, users[4]._id)];

  var positions = await Promise.all(posPromises);

  var blogPromises = [
    LocationBlogCreator("Cool Place", users[0]._id, 26, 148),
    LocationBlogCreator("Another Cool Place", users[0]._id, 56, 56),
    LocationBlogCreator("Yet Another Cool Place", users[0]._id, 156, 56),
    LocationBlogCreator("The coolest Place", users[3]._id, 156, 56),
  ];
  var blogs = await Promise.all(blogPromises);
  //console.log(users);
  //console.log(positions);
  console.log(blogs);
}
// createUsers();
async function createLocationUsers() {
  await User.remove({});
  await Position.remove({});
  await LocationBlog.remove({});

  var userPromises = [
    userCreate("Kurt", "Wonnegut", "kurwonne", "test", "xxx", "comp", "comp.url"),
    userCreate("aafa", "sfsdf", "user2 ", "test", "xxx", "comp", "comp.url"),
    userCreate("fsaf", "sfsdf", "user3", "test", "xxx", "comp", "comp.url"),
    userCreate("afasfaafa", "sfssfd", "user4", "test", "xxx", "comp", "comp.url"),
    userCreate("aaafasffa", "fsf", "user5Tester", "test", "xxx", "comp", "comp.url")
  ]

  var users = await Promise.all(userPromises);
  var posPromises = [
    positionCreator(12.551193237304688, 55.71918245941694, users[0]._id, true),
    positionCreator(12.639255523681639, 55.642627205067136, users[1]._id, true),
    positionCreator(12.504844665527342, 55.66432177864445, users[2]._id, true),
    positionCreator(12.594623565673828, 55.691616607310834, users[3]._id, true)
  ]


  var positions = await Promise.all(posPromises);

}
createLocationUsers();