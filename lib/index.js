// This is where we store our functions
const { getLocation } = require("./location.js")
const { getWeather } = require("./weather.js")

const main = async place => {
  try {
    const locationData = await getLocation(place)
    const weatherData = await getWeather(locationData)

    // Manipulate data
    let celcius = (weatherData.temperature - 32) / 1.8
    celcius = celcius.toFixed(1) + "℃"

    let address = locationData.name.split(",")

    for (let i = 0; i < address.length; i++) {
      address[i] = address[i].trim()
    }

    let first = address.shift()

    return {
      first: first,
      place: address,
      temp: celcius,
      summary: weatherData.summary
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  main
}
