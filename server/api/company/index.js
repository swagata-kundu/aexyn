import Express from 'express';
import { verifyAuth } from '../../middlewares';
import createCompany from './create_company';

export default function (db) {
  return Express
    .Router()
    .post('/', createCompany(db))
    .get('/search', require('./search_company')(db))
    .use(verifyAuth(db))
    .get('/offices', require('./company_management').getCompanyOffices(db))
    .get('/offices/:office_id', require('./company_management').getOfficeInfo(db))
    .get('/offices/:office_id/employees', require('./company_management').getOfficeEmployees(db));
}
