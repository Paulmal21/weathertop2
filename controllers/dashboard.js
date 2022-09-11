'use strict';

const accounts = require ('./accounts.js');
const logger = require('../utils/logger');
const stationHub = require('../models/station-hub');
const uuid = require('uuid');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    const viewData = {
      title: 'Station Dashboard',
      stations: stationHub.getUserStations(loggedInUser.id),
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
  
  addStation(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newStation = {
      id: uuid.v1(),
      userid: loggedInUser.id,
      location: request.body.location,
      longitude: request.body.longitude,
      latitude: request.body.latitude,
      readings: [],
    };
    logger.debug("Creating a new Station", newStation);
    stationHub.addStation(newStation);
    response.redirect('/dashboard');
  }
};

module.exports = dashboard;