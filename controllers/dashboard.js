'use strict';

const logger = require('../utils/logger');
const stationHub = require('../models/station-hub');

const uuid = require('uuid');


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



/*
  const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const stations = stationStore.getAllStations();
    for(const station of stations) {
      station.latestReading=latestReading;
    }
    const viewData = {
      title: "Station Dashboard",
      stations: stations,
    };

 */

  
  deleteStation(request, response) {
    const stationId = request.params.id;
    logger.debug(`Deleting Station ${stationId}`);
    stationHub.removeStation(stationId);
    response.redirect('/dashboard');
  },
  
  addStation(request, response) {
    const newStation = {
      id: uuid.v1(),
      location: request.body.location,
      longitude: request.body.longitude,
      latitude: request.body.latitude,
      readings: [],
    };
    stationHub.addStation(newStation);
    response.redirect('/dashboard');
  }
};

module.exports = dashboard;