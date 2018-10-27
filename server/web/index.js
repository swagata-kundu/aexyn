import Express from 'express';
import { webAuth } from '../middlewares';

export default function (db) {
  return Express
    .Router()
    .get('/create-account*', (req, res) => res.render('create-account'))
    .get('/qualification-manager*', webAuth(db), (req, res) => res.render('qualification-manager', { _user_: { ...res.locals.userInfo } }))
    .get('/', (req, res) => res.render('sign-in'));
}
