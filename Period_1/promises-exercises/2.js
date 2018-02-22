const fetch = require('node-fetch');

const URL = "https://swapi.co/api/people/";

// Done with promises
// function getPlanetforFirstSpeciesInFirstMovieForPerson (id){
//     let results = {}
//     fetch(URL+id)
//     .then(res => res.json())
//     .then(data => {
//         var newUrl = data.films[0];
//         console.log("data.films", data.films[0])
//         results.personName = data.name;
//         return fetch(newUrl).then(res => res.json())
//     })
//     .then(data => {
//         var newURL = data.species[0];
//         console.log("newURL: " + newURL);
//         results.filmTitle = data.title;
//         return fetch(newURL).then(res =>res.json()) 
//     })
//     .then(data => {
//         var newURL = data.homeworld;
//         console.log(newURL);
//         results.specieName = data.name;
//         return fetch(newURL).then(res => res.json())
//     })
//     .then(data => {
//         results.planet = data.name;
//         console.log(results);
//     })
//     .catch(err => console.log("Err: " + err));
    
// }

async function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
    var results = {};
    try {
        const n = await fetch(URL + id).then(res => res.json());
        const f = await fetch(n.films[0]).then(res => res.json());
        const s = await fetch(f.species[0]).then(res => res.json());
        const p = await fetch(s.homeworld).then(res => res.json());
        results.name = n.name;
        results.title = f.title;
        results.species = s.name;
        results.planet = p.name;
        console.log(results);
    } 
    catch (err) {
        console.log("Error: ", err);
    }
}
getPlanetforFirstSpeciesInFirstMovieForPerson(2);