import Express from 'express';

export default function (db) {
  return Express
    .Router()
    .get('/', require('./get').all(db))
    .get('/labour-type', require('./get').getLabpurType(db))
    .get('/country', require('./get').getCountry(db))
    .get('/workperformed', require('./get').getWorkedPerformed(db));
}
