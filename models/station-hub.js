'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');
const station = require("../controllers/station");

const stationHub = {
  store: new JsonStore('./models/station-hub.json', { stationList: [] }),
  collection: 'stationList',

  getAllStations() {
    return this.store.findAll(this.collection);
  },

  getStation(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addStation(station) {
    this.store.add(this.collection, station);
    this.store.save();
  },

  removeStation(id) {
    const station = this.getStation(id);
    this.store.remove(this.collection, station);
    this.store.save();
  },

  removeAllStations() {
    this.store.removeAll(this.collection);
    this.store.save();
  },


  addReading(id, reading) {
    const station = this.getStation(id);
    station.readings.unshift(reading);
    this.store.save();
  },

  removeReading(id, readingId) {
    const station = this.getStation(id);
    const readings = station.readings;
    _.remove(readings, { id: readingId});
    this.store.save();
  },
  
  getUserStations(userid) {
    return this.store.findBy(this.collection, { userid: userid });
  },
  
  getReading(id, readingId) {
    const station = this.store.findOneBy(this.collection, { id: id });
    const reading = station.readings.filter(reading => reading.id == readingId);
    return reading[0];
  },
  
  updateReading(reading, updatedReading) {
    reading.code = updatedReading.code;
    reading.temp = updatedReading.temp;
    reading.fahrenheit = (parseInt(updatedReading.temp)*(9 / 5)) + 32;
    reading.windSpeed = updatedReading.windSpeed;
    reading.windDirection = updatedReading.windDirection;
    reading.pressure = updatedReading.pressure;
    this.store.save();
  },



};

module.exports = stationHub;
