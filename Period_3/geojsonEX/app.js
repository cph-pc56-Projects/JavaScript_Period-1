const express = require('express');
const gju = require('geojson-utils');
const app = express();
const {gameArea, playersInArea} = require('./gameData');


app.get('/', (req, res) => res.send('Geo Demo!'))

app.get('/geoapi/isuserinarea/:lon/:lat', (req, res) => {
    const point = {'type': 'Point', 'coordinates': [req.params.lon, req.params.lat]};
    const area = gameArea.features[0].geometry;
    
    const status = gju.pointInPolygon(point, area);

    let message = {
        status: false,
        msg: ''
    }
    if(status) {
        message.status = status,
        message.msg = 'Point is inside the tested polygon'
    } else {
        message.status = false,
        message.msg = 'Point is NOT inside the tested polygon'
    }
    
    res.send(JSON.stringify(message));
})

//http://localhost:3000/geoapi/findNearbyPlayers/12.565269470214842/55.788349856956444/500
app.get('/geoapi/findNearbyPLayers/:lon/:lat/:rad', (req, res) => {
    const center = {'type': 'Point', 'coordinates': [req.params.lon, req.params.lat]};
    const radius = req.params.rad;
    const area = gameArea.features[0].geometry;
    const players = playersInArea;
    console.log('Players before search:',players.length);
    
    let foundPlayers = [];

    for(var i = 0; i < players.length; i++) {
         if(gju.geometryWithinRadius(players[i].geometry, center, radius )){
             foundPlayers.push(players[i])
         }
    }
    console.log('Found PLayers',foundPlayers.length);

    res.send(JSON.stringify(foundPlayers))
})

app.get('/geoapi/distanceToUser/:lon/:lat/:username', (req, res) => {
    const point = {'type': 'Point', 'coordinates': [req.params.lon, req.params.lat]};
    const area = gameArea.features[0].geometry;
    let user = req.params.username;
    

    const players = playersInArea;
    console.log('player', players[0].properties.name);
    let playerOnList = false;
    const FoundMsg = {
        distance: '',
        to: ''
    }
    const NotFountMsg =  {
        msg: 'User not found',
        statusCode: 404
    }

    for (var i = 0; i < players.length; i++) {
        if(players[i].properties.name == user) {
            playerOnList = true;
            user = players[i];
            
        }
    }
    console.log("user status",user, playerOnList);
    if(playerOnList) {
        FoundMsg.distance = gju.pointDistance(point, user.geometry);
        FoundMsg.to = user.properties.name;
        res.send(JSON.stringify(FoundMsg));
    } else {
        res.send(JSON.stringify(NotFountMsg));
    }
    
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));