import Express from 'express';
import user from './user';
import company from './company';
import questions from './questions';
import invitations from './invitations';
import MasterData from './master-data';
import permission from './permisssion';
import files from './files';
import { verifyAuth } from '../middlewares';

export default function routes(db) {
  return Express.Router().use('/user', user(db))
    .use('/company', company(db))
    .use('/master-data', MasterData(db))
    .use(verifyAuth(db))
    .use('/questions', questions(db))
    .use('/permission', permission(db))
    .use('/invitations', invitations(db))
    .use('/files', files(db));
}
