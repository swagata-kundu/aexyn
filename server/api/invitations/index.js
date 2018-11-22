import Express from 'express';

const { getInvitationLink, sendInvitation } = require('./send_invitation');
const { getSupplierInvites } = require('./mfs');
const {
  getInvitesFromJungle, getEditorsList, addEditor, deleteEditor,
} = require('./jungle');

export default function (db) {
  return Express
    .Router()
    .get('/link', getInvitationLink(db))
    .get('/search/company/:company_id', require('./search_employee')(db))
    .get('/mfs/supplier-invites', getSupplierInvites(db))
    .get('/jungle/supplier-invites', getInvitesFromJungle(db))
    .get('/jungle/editors/:invitation_id', getEditorsList(db))
    .post('/send', sendInvitation(db))
    .post('/jungle/editors', addEditor(db))
    .post('/search', require('./search_company')(db))
    .delete('/jungle/editors/:editor_id', deleteEditor(db));
}
