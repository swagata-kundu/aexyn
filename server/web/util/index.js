
const moment = require('moment');
const _ = require('lodash');
const { axios } = require('./axios');

const formatDate = date => moment(date, 'YYYY-MM-DD HH:mm').format('DD/MM/YYYY');
const formatTime = date => moment(date, 'YYYY-MM-DD HH:mm').format('h:mm A');
const userIcon = ({ first_name, last_name }) => `${_.get(first_name, '0', '').toLocaleUpperCase()}${_.get(
  last_name,
  '0',
  '',
).toLocaleUpperCase()}`;

module.exports = {
  userIcon,
  axios,
  formatDate,
  formatTime,
};
