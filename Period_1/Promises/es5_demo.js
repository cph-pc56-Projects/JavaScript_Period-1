// ES5 Demo

var isMomHappy = true;

//Promise
var willIgetNewPhone = new Promise(
    function (resolve, reject) {
        if(isMomHappy) {
            var phone = {
                brand: 'Samsung', 
                color: 'black'
            };
            resolve(phone); //resolve
        } else {
            var reason = new Error('Mom is not happy');
            reject(reason);  // reject
        }
    }
);

// var showOff = function(phone) {
//     return new Promise(
//         function(resolve, reject) {
//             var message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone.`;
//             resolve(message);
//         }
//     )
// }

//Short version of showOff
var showOff = function(phone) {
    var message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone.`;
    return Promise.resolve(message);
}





// call our promise
// Consuming the promise
var askMom = function() {
    console.log("Before asking moms");
    willIgetNewPhone
        .then(showOff)
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function(error) {
            console.log(error.message)
        });
    console.log("After asking mom");
};

askMom();