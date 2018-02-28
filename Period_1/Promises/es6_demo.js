/* ES6 */

const isMomHappy = true;

//Promise

const willIgetNewPhone = new Promise((resolve, reject) => {
    if(isMomHappy) {
        const phone = {
            brand: 'Samsung', 
            color: 'black'
        };
        resolve(phone);
    } else {
        const reason = new Error('Mom is not happy!');
        reject(reason);
    }
})

const showOff = function (phone) {
    const message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone.`;
    return Promise.resolve(message);
}

//calling our promise

const askMom = () => {
    willIgetNewPhone
        .then(showOff)
        .then(fullfilled => console.log(fullfilled))
        .catch(error => console.log(error.message));
};

askMom();