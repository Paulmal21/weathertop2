'use strict';

const logger = require('../utils/logger');
const stations = require('../models/station-hub.js');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Station Dashboard',
      station: tramore,
    };
    logger.info('about to render', stations);
    response.render('dashboard', viewData);
  },
};

module.exports = dashboard;