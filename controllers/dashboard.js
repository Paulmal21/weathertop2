'use strict';

const logger = require('../utils/logger');
const stationList = require('../models/station-hub.js');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Station Dashboard',
      stations: stationList,
    };
    logger.info('about to render', stationList);
    response.render('dashboard', viewData);
  },
};

module.exports = dashboard;