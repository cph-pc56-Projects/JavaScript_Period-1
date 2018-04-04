const gameArea = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              12.548789978027344,
              55.794381694500565
            ],
            [
              12.54939079284668,
              55.78183442320686
            ],
            [
              12.568445205688477,
              55.78159308992029
            ],
            [
              12.580375671386719,
              55.78236535117593
            ],
            [
              12.577629089355469,
              55.79317540171734
            ],
            [
              12.564969062805176,
              55.794454070879446
            ],
            [
              12.548789978027344,
              55.794381694500565
            ]
          ]
        ]
      }
    }
  ]
}

const playersInArea = [
  {
    "type": "Feature",
    "properties": {name: 'Peter'},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.55986213684082,
        55.78617816677291
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {name: 'Jack'},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.571792602539062,
        55.79061793745191
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {name: 'Axwell'},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.560548782348633,
        55.78921849913244
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {name: 'Rick'},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.564411163330078,
        55.78019332738194
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {name: 'Morty'},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.549991607666016,
        55.794912451489
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {name: 'Inna'},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.5738525390625,
        55.79423694133928
      ]
    }
  }
]

module.exports = {gameArea, playersInArea};

