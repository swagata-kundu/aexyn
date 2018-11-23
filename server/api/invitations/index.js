import Express from 'express';

const { getInvitationLink, sendInvitation } = require('./send_invitation');
const { getSupplierInvites } = require('./mfs');
const {
  getNotes,
  addNotes,
  deleteNote,
} = require('./mfs_notes');

const {
  getReviewers,
  addReviewers,
  deleteReviewer,
} = require('./mfs_reviewers');

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
    .get('/mfs/notes/:invitation_id', getNotes(db))
    .get('/mfs/reviewers/:invitation_id', getReviewers(db))
    .post('/send', sendInvitation(db))
    .post('/jungle/editors', addEditor(db))
    .post('/mfs/notes', addNotes(db))
    .post('/mfs/reviewers', addReviewers(db))
    .post('/search', require('./search_company')(db))
    .delete('/jungle/editors/:editor_id', deleteEditor(db))
    .delete('/mfs/notes/:note_id', deleteNote(db))
    .delete('/mfs/reviewers/:reviewer_id', deleteReviewer(db));
}
