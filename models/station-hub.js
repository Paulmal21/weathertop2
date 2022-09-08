'use strict';

const logger = require('../utils/logger');

const tramore = {
  location: 'Tramore',
  readings: [
    {
      code: '100',
      temp: 'Beethoven',
      windSpeed: 'Piano Sonata No. 3',
      windDirection: 'Piano Sonata No. 3',
      pressure: 'Piano Sonata No. 3',
    },
    {
      code: 'Piano Sonata No. 3',
      temp: 'Beethoven',
      windSpeed: 'Piano Sonata No. 3',
      windDirection: 'Piano Sonata No. 3',
      pressure: 'Piano Sonata No. 3',
    },
    {
      code: 'Piano Sonata No. 3',
      temp: 'Beethoven',
      windSpeed: 'Piano Sonata No. 3',
      windDirection: 'Piano Sonata No. 3',
      pressure: 'Piano Sonata No. 3',
    },
  ],
};

const dunmore = {
  location: 'Dunmore',
  readings: [
    {
      code: '22',
      temp: '33',
      windSpeed: '5',
      windDirection: 'NW',
      pressure: '60',
    },
    {
      code: '22',
      temp: '33',
      windSpeed: '5',
      windDirection: 'NW',
      pressure: '60',
    },
    {
      code: '22',
      temp: '33',
      windSpeed: '5',
      windDirection: 'NW',
      pressure: '60',
    },
  ],
};

const stationList = [tramore, dunmore];

module.exports = stationList;