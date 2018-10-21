import Express from 'express';

export default function (db) {
  return Express
    .Router()
    .post('/', require('./create_account')(db))
    .get('/check-email/:email', require('./checkemail')(db));
}
