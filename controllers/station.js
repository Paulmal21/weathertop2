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
};

module.exports = station;