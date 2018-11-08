import Express from 'express';

const {
  getPermissions, addSupplierPermission, deleteSupplierPermission, changeCompanyPermission,
  changeEmployeeSupplierPermission,
} = require('./suppliers');
const { addJunglePermission, deleteJunglePermission } = require('./jungle');

export default function (db) {
  return Express
    .Router()
    .get('/', getPermissions(db))
    .put('/', changeCompanyPermission(db))
    .post('/jungle', addJunglePermission(db))
    .post('/suppliers', addSupplierPermission(db))
    .put('/suppliers', changeEmployeeSupplierPermission(db))
    .delete('/jungle/:id', deleteJunglePermission(db))
    .delete('/suppliers/:id', deleteSupplierPermission(db));
}
