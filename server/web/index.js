import Express from 'express';
import { webAuth, notLoggedIn } from '../middlewares';
import join from './join_us';

export default function (db) {
  return Express
    .Router()
    .get('/create-account*', notLoggedIn(db), (req, res) => res.render('create-account'))
    .get('/qualification-manager*', webAuth(db), (req, res) => res.render('qualification-manager', { _user_: { ...res.locals.userInfo } }))
    .get('/company-manager*', webAuth(db), (req, res) => res.render('company-manager', { _user_: { ...res.locals.userInfo } }))
    .get('/profile-manager*', webAuth(db), (req, res) => res.render('profile-manager', { _user_: { ...res.locals.userInfo } }))
    .get('/logout*', (req, res) => {
      res.clearCookie('user_id');
      if (req.session) {
        req.session.destroy(() => res.redirect('/'));
      } else {
        res.redirect('/');
      }
    })
    .get('/aexyn/join-us/:hash', notLoggedIn(db), join(db))
    .get('/forget-password', notLoggedIn(db), (req, res) => res.render('sign-in'))
    .get('/reset-password/*', notLoggedIn(db), (req, res) => res.render('sign-in'))
    .get('/', notLoggedIn(db), (req, res) => res.render('sign-in'));
}
