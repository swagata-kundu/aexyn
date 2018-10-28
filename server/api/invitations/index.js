import Express from 'express';

export default function (db) {
  return Express
    .Router()
    .post('/search', require('./search_company')(db));
}
