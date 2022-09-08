'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const stationHub = {
  
  store: new JsonStore('./models/station-hub.json', { stationList: [] }),
  collection: 'stationList',


  getAllStations() {
    return this.stationList;
  },

  getStation(id) {
    return _.find(this.stationList, { id: id });
  },
  
  removeReading(id, readingId) {
    const station = this.getStation(id);
    
    _.remove(station.readings, { id: readingId });

    // removes the reading from the station using the IDs
  },
  
  removeStation(id) {
    _.remove(this.stationList, { id: id });
    
    // removes the station using its ID
  },
  
  addReading(id, reading) {
    const station = this.getStation(id);
    station.readings.push(reading);
  },
  
  addStation(station) {
    this.stationList.push(station);
  },
};

module.exports = stationHub;