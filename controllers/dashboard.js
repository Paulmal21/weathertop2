'use strict';

const logger = require('../utils/logger');
const stationHub = require('../models/station-hub');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Station Dashboard',
      stations: stationHub.getAllStations(),
    };
    logger.info('about to render', stationHub.getAllStations());
    response.render('dashboard', viewData);
  },
  
  deleteStation(request, response) {
    const stationId = request.params.id;
    logger.debug(`Deleting Station ${stationId}`);
    stationHub.removeStation(stationId);
    response.redirect('/dashboard');
  },
};

module.exports = dashboard;