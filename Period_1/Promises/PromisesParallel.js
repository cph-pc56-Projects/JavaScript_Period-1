let promiseFactory = function(msg, delay) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            var ok = true;
            var err = 'Uups'
            if (msg == 'a')
                ok = false;
                err = "a is not welcome";
            if (ok) {
                resolve(msg.toUpperCase());
            } else {
                reject(err);
            }
        }, delay);
    });
};

let p1 = promiseFactory('Msg from 1st Promise', 2000);
let p2 = promiseFactory('a', 1000);
let p3 = promiseFactory('Msg from 3rd Promise', 5000);
let p4 = promiseFactory('Msg from 4rd Promise', 3000);
Promise.all([p1, p2, p3, p4])
.then(data => {
    console.log(data.join("\n"));
})
.catch(err => console.log("Err: " + err));
