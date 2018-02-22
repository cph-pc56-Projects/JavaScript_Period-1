// // a)------------------------------------------------------->>> Reduce an array to a string
// var all = ["Lars", 'Peter', 'Jan', 'Bo'];

// console.log(all.join(', #'));

// b)------------------------------------------------------->>> Creating own reduce
// var numbers = [2, 3, 67, 33];

// var sum = numbers.reduce((a, c) => {
//     return a + c;
// });
// console.log(sum);

// find average
// var members = [
//     {name : "Peter", age: 18},
//     {name : "Jan", age: 35},
//     {name : "Janne", age: 25},
//     {name : "Martin", age: 22},
//    ];

// var average = members.reduce((a, c, i, arr) => {
//     return a + c.age / arr.length;
// }, 0);
// console.log(average);

// d) ------------------------------------------------------->>> Counting votes
// var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

// var countedVotes = votes.reduce((allNames, name) => {
//     if (name in allNames) {
//         allNames[name]++;
//     } else {
//         allNames[name] = 1;
//     }
//     return allNames;
// }, {});
// console.log(countedVotes);