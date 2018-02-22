let promiseFactory = function(msg, delay) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            var ok = true;
            if (ok) {
                resolve(msg.toUpperCase());
            } else {
                reject("Uups");
            }
        }, delay);
    });
};

let p = promiseFactory("Msg from Promise", 2000);
let results = [];
p.then(data => {
    results.push(data); 
    console.log(data); 
    return promiseFactory("Second Promise", 1000);
})
.then(data => {
    results.push(data);
    console.log(data);
    return promiseFactory("3rd Promise  Class", 2000);
}) 
.then(data => {
    results.push(data);
    console.log(data);
    //console.log(results.join("\n"))
})
 .catch(err => console.log("Err", err));
