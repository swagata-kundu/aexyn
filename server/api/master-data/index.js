import Express from 'express';
import { verifyAuth } from '../../middlewares';

export default function (db) {
  return Express
    .Router()
    .get('/', require('./get').all(db))
    .get('/invitaion-filter', verifyAuth(db), require('./get').invitaionFilter(db))
    .get('/labour-type', require('./get').getLabpurType(db))
    .get('/country', require('./get').getCountry(db))
    .get('/workperformed', require('./get').getWorkedPerformed(db));
}
