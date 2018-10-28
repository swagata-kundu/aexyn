import Express from 'express';

export default function (db) {
  return Express
    .Router()
    .get('/search/company/:company_id', require('./search_employee')(db))
    .post('/search', require('./search_company')(db));
}
