import Express from 'express';

export default function (db) {
  return Express
    .Router()
    .post('/login', require('./login')(db))
    .post('/', require('./create_account')(db))
    .post('/reset-password-link', require('./reset_password').createResetLink(db))
    .post('/reset-password', require('./reset_password').resetPassword(db))
    .get('/verify-account/:hash', require('./verify_account')(db))
    .get('/check-email/:email', require('./checkemail')(db));
}
