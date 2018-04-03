var faker = require('faker');
var usersDB = require('../facade');

var appRouter = function (app) {
    

    app.get('/user', function (req, res) {
        var data = ({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            username: faker.internet.userName(),
            email: faker.internet.email()
        });
        res.status(200).send(data);
        console.log('fake data', data);
    });

    app.get('/db', usersDB.getUsers)
}

module.exports = appRouter;