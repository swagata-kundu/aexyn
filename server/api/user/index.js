import Express from 'express';
import { verifyAuth } from '../../middlewares';

export default function (db) {
  return Express
    .Router()
    .post('/login', require('./login')(db))
    .post('/', require('./create_account')(db))
    .post('/reset-password-link', require('./reset_password').createResetLink(db))
    .post('/reset-password', require('./reset_password').resetPassword(db))
    .get('/:user_id', verifyAuth(db), require('./user_profile').getUserDetail(db))
    .put('/change-password', verifyAuth(db), require('./user_profile').changePassword(db))
    .put('/preference', verifyAuth(db), require('./user_profile').changePreference(db))
    .put('/notification-preference', verifyAuth(db), require('./user_profile').changeNotificationPreference(db))
    .put('/:user_id', verifyAuth(db), require('./user_profile').updateUserDetail(db))
    .get('/verify-account/:hash', require('./verify_account')(db))
    .get('/check-email/:email', require('./checkemail')(db));
}
