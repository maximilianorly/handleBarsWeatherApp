const request = require("request")
const { promisify } = require("util")

const promisifiedRequest = promisify(request)

// const { weatherToken } = require("../keys")
const { weatherToken } = require("../LOCAL_KEYS")

const getWeather = async locationData => {
  try {
    let data = await promisifiedRequest({
      url: `https://api.darksky.net/forecast/${weatherToken}/${locationData.lng},${locationData.lat}`,
      json: true
    })

    return data.body.currently
  } catch {
    console.log("oops an error has occured")
  }
}

module.exports = {
  getWeather
}
