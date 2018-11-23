import Express from 'express';
import { verifyAuth } from '../../middlewares';
import createCompany from './create_company';

export default function (db) {
  return Express
    .Router()
    .post('/', createCompany(db))
    .put('/:company_id', require('./company_management').updateCompany(db))
    .get('/search', require('./search_company')(db))
    .use(verifyAuth(db))
    .post('/:company_id/offices', require('./company_management').createOffice(db))
    .put('/offices/:office_id', require('./company_management').updateOffice(db))
    .get('/offices', require('./company_management').getCompanyOffices(db))
    .get('/offices/:office_id', require('./company_management').getOfficeInfo(db))
    .get('/offices/:office_id/employees', require('./company_management').getOfficeEmployees(db))
    .get('/:company_id/employees', require('./company_management').getAllEmployees(db))
    .get('/:company_id', require('./company_management').getCompanyInfo(db))
    .get('/', require('./company_management').getAllCompany(db));
}
