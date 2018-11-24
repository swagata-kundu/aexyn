const moment = require('moment');
const { axios } = require('./axios');

const formatDate = date => moment(date, 'YYYY-MM-DD HH:mm').format('DD/MM/YYYY');
const formatTime = date => moment(date, 'YYYY-MM-DD HH:mm').format('H:m A');

module.exports = {
  axios,
  formatDate,
  formatTime,

};
