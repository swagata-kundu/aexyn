import Express from 'express';

const { getInvitationLink, sendInvitation } = require('./send_invitation');
const { getSupplierInvites } = require('./mfs');

export default function (db) {
  return Express
    .Router()
    .get('/link', getInvitationLink(db))
    .get('/search/company/:company_id', require('./search_employee')(db))
    .get('/mfs/supplier-invites', getSupplierInvites(db))
    .post('/send', sendInvitation(db))
    .post('/search', require('./search_company')(db));
}
