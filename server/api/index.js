import Express from 'express';
import user from './user';
import company from './company';
import MasterData from './master-data';

export default function routes(db) {
  return Express.Router().use('/user', user(db))
    .use('/company', company(db))
    .use('/master-data', MasterData(db));
}
