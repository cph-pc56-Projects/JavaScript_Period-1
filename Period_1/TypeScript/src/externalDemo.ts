import fetch from 'node-fetch';


let URL: string = 'https://jsonplaceholder.typicode.com/users/1';

fetch(URL)
    .then(res => res.json())
    .then(user => console.log(user.name));