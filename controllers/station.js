'use strict';

const logger = require('../utils/logger');
const stationList = require('../models/station-hub.js');

const station = {
  index(request, response) {
    const viewData = {
      title: 'Station',
    };
    response.render('station', viewData);
  },
};

module.exports = station;