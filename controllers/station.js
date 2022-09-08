'use strict';

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
};

module.exports = station;