'use strict';

const logger = require('../utils/logger');
const stationList = require('../models/station-hub.js');

const station = {
  index(request, response) {
    const stationId = request.params.id;
    logger.info('Station id = ', stationId);
    const viewData = {
      title: 'Station',
      station: stationHub.getStation(stationId),
    };
    response.render('station', viewData);
  },
};

module.exports = station;