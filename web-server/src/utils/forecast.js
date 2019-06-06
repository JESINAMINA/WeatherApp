const request = require("request");

const forecast = (latitude, longitude, measure, callback) => {
  if (measure === "Celsius") {
    var url =
      "https://api.darksky.net/forecast/1d744a940ada31de4c6cd75e9d3fc989/" +
      latitude +
      "," +
      longitude +
      "?units=si";
  } else {
    var url =
      "https://api.darksky.net/forecast/1d744a940ada31de4c6cd75e9d3fc989/" +
      latitude +
      "," +
      longitude;
  }

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          " It is currently " +
          body.currently.temperature +
          " degress out. There is a " +
          body.currently.precipProbability +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
