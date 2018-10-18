import Async from 'async';
import _ from 'lodash';
import { tables } from '../../db';
import { constants, util } from '../../common';

export default class Company {
  constructor(con) {
    this.con = con;
  }

    createCompanyOffice=(data, done) => {
      Async.auto({
        office: cb => this.con.insert({ tableName: tables.OFFICE, values: data }, cb),
        package: ['office', (results, cb) => {
          const values = {
            office_id: results.office,
            package_id: constants.PACKAGE.FREE,
            start_date: util.getDateString(),
          };
          return this.con.insert({ tableName: tables.OFFICE_PACKAGE, values }, cb);
        }],
      }, (err,result)=>{
        return done(err,result);
      });
    }

    createCompany= ({ company_info, offices }, done) => {
      Async.auto({
        company: (cb) => {
          this.con.insert({ tableName: tables.COMPANY, values: company_info }, cb);
        },
        office: ['company', (results, cb) => {
          const { company } = results;

          Async.mapSeries(offices, (office, cb2) => {
            const o = { ...office, company_id: company };
            return this.createCompanyOffice(o, cb2);
          }, (err, loc_results) => {
            if (err) {
              return cb(err);
            }
            return cb(null, _.flatten(loc_results));
          });
        }],
      }, done);
    }
}
