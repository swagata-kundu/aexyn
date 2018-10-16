import Express from 'express';
import createCompany from './create_company';

export default function (db) {
  return Express
    .Router()
    .post('/', createCompany(db))
    .get('/search', require('./search_company')(db));
}
