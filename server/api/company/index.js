import Express from 'express';

export default function (db) {
  return Express
    .Router()
    .get('/search', require('./search_company')(db));
}
