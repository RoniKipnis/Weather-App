const request = require('request')

const geocode = (adress, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(adress) +
    '.json?access_token=pk.eyJ1Ijoicm9uaWtpcG5pczExMjIzMyIsImEiOiJja3p2bHA0aXYxbTgzMndwa3ltZjF2YmRqIn0.zAbM3s8tQQb343AloPsieA'
  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to loaction services!', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find loaction , try another search', undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      })
    }
  })
}

module.exports = geocode
