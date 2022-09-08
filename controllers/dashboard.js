'use strict';

const logger = require('../utils/logger');
const stationHub = require('../models/station-hub.js');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Station Dashboard',
      playlists: stationHub.getAllStations(),
    };
    logger.info('about to render', stationHub.getAllStations());
    response.render('dashboard', viewData);
  },
};

module.exports = dashboard;