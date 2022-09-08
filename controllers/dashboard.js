"use strict";

const logger = require("../utils/logger");

const stations = {
  title: 'Dunmore',
  readings: [
    {
      code: '100',
      temp: '15',
      windSpeed: '22',
      windDirection: 'North',
      pressure: '60',
    },
    {
      code: '2100',
      temp: '215',
      windSpeed: '222',
      windDirection: '2North',
      pressure: '260',
    },
    {
      code: '3100',
      temp: '315',
      windSpeed: '322',
      windDirection: '3North',
      pressure: '360',
    },
  ],
};

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: "WeatherTop Dashboard",
      station: stations
    };
    response.render("dashboard", viewData);
  },
};

module.exports = dashboard;
