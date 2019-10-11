const request = require("request")
const { promisify } = require("util")

// const { locationToken } = require("../keys")
const { locationToken } = require("../LOCAL_KEYS")

const promisifiedRequest = promisify(request)

const getLocation = async place => {
  try {
    let data = await promisifiedRequest({
      url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${locationToken}`,
      json: true
    })
    return {
      name: data.body.features[0].place_name,
      lat: data.body.features[0].center[0],
      lng: data.body.features[0].center[1]
    }
  } catch (error) {
    console.log("oh no")
  }
}

module.exports = {
  getLocation
}
