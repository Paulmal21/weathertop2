"use strict";

const logger = require("../utils/logger");
const stationHub = require("../models/station-hub");


const reading = {
  index(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    logger.debug(`Editing Reading ${readingId} from Station ${stationId}`);
    const viewData = {
      title: "Edit Reading",
      station: stationHub.getStation(stationId),
      reading: stationHub.getReading(stationId, readingId)
    };
    response.render("reading", viewData);
  },

  update(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    const reading = stationHub.getReading(stationId, readingId)
    const newReading = {
      code: request.body.code,
      temp: request.body.temp,
      windSpeed: request.body.windSpeed,
      windDirection: request.body.windDirection,
      pressure: request.body.pressure
    };
    logger.debug(`Updating Reading ${readingId} from Station ${stationId}`);
    stationHub.updateReading(reading, newReading);
    response.redirect("/station/" + stationId);
  },
};

module.exports = reading;