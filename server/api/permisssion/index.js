import Express from 'express';

const { getPermissions, addSupplierPermission, deleteSupplierPermission } = require('./suppliers');
const { addJunglePermission, deleteJunglePermission } = require('./jungle');

export default function (db) {
  return Express
    .Router()
    .get('/', getPermissions(db))
    .post('/jungle', addJunglePermission(db))
    .post('/suppliers', addSupplierPermission(db))
    .delete('/jungle/:id', deleteJunglePermission(db))
    .delete('/suppliers/:id', deleteSupplierPermission(db));
}
