import Express from 'express';
import user from './user';
import company from './company';
import questions from './questions';
import MasterData from './master-data';
import { verifyAuth } from '../middlewares';

export default function routes(db) {
  return Express.Router().use('/user', user(db))
    .use('/company', company(db))
    .use('/master-data', MasterData(db))
    .use(verifyAuth(db))
    .use('/questions', questions(db));
}
