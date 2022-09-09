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
      windSpeed: request.body.windSpeed,
      windDirection: request.body.windDirection,
      pressure: request.body.pressure,
    };
    stationHub.addReading(stationId, newReading);
    response.redirect('/station/' + stationId);
  },
};

module.exports = station;