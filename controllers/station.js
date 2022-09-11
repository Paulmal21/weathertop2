'use strict';

const uuid = require('uuid');
const logger = require('../utils/logger');
const stationHub = require('../models/station-hub');

const station = {
  index(request, response) {
    const stationId = request.params.id;
    logger.debug('Station id = ', stationId);    
    const viewData = {
      title: 'Station',
      station: stationHub.getStation(stationId),
    };
    response.render('station', viewData);
  },
  
  deleteReading(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    logger.debug(`Deleting Reading ${readingId} from Station ${stationId}`);
    stationHub.removeReading(stationId, readingId);
    response.redirect('/station/' + stationId);
  },


  addReading(request, response) {
    const stationId = request.params.id;
    const station = stationHub.getStation(stationId);
    const newReading = {
      id: uuid.v1(),
      code: request.body.code,
      temp: request.body.temp,
      fahrenheit: ((parseInt(request.body.temp)*(9 / 5)) + 32),
      windSpeed: request.body.windSpeed,
      windDirection: request.body.windDirection,
      chill: (13.12 + (0.6215 * parseInt(request.body.temp)) - (11.37 * (Math.pow(parseInt(request.body.windSpeed), 0.16))) + (0.3965 * (request.body.temp) * (Math.pow(request.body.windSpeed, 0.16)))),
      pressure: request.body.pressure,
    };
    logger.debug("New Reading = ", newReading);
    stationHub.addReading(stationId, newReading);
    response.redirect('/station/' + stationId);

  },
};

module.exports = station;