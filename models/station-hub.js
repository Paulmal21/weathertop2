'use strict';

const _ = require('lodash');

const stationHub = {

  stationList: require('./station-hub.json').stationList,

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
};

module.exports = stationHub;