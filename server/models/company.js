import Async from 'async';
import _ from 'lodash';
import boom from 'boom';
import passerror from 'passerror';
import { tables, sp } from '../db';
import { constants, util } from '../common';

export default class Company {
  constructor(con) {
    this.con = con;
  }

    createCompanyOffice=(data, done) => {
      Async.auto({
        office: (cb) => {
          const mod = data;
          delete mod.country_id;
          return this.con.insert({ tableName: tables.OFFICE, values: mod }, cb);
        },
        package: ['office', (results, cb) => {
          const values = {
            office_id: results.office,
            package_id: constants.PACKAGE.FREE,
            start_date: util.getDateString(),
          };
          return this.con.insert({ tableName: tables.OFFICE_PACKAGE, values }, cb);
        }],
      }, (err, result) => done(err, result));
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
        questionire: ['office', (results, cb) => {
          const { company } = results;
          this.con.query({
            text: 'CALL ?? (?)',
            values: [sp.SET_INITIAL_QUESTIONS, company],
          }, cb);
        }],
      }, done);
    }

    getCompanyOffices=({ company_id }, done) => this.con.query({
      text: `SELECT 
        OFFICE.*, COUNT(UOP.id) AS employee_count
    FROM
        company_office OFFICE
            JOIN
        user_office_profile UOP ON UOP.office_id = OFFICE.id
    WHERE company_id=?
    GROUP BY OFFICE.id;`,
      values: [company_id],
    }, done)

    getOfficeEmployees=({ office_id }, done) => this.con.query({
      text: `SELECT 
      UOP.*, user.first_name, user.last_name, user.email
  FROM
      user_office_profile UOP
          JOIN
      user ON UOP.user_id = user.id
      WHERE UOP.office_id=?`,
      values: [office_id],
    }, done)

    getOfficeInfo=({ office_id }, done) => this.con.query({
      text: `SELECT 
      CO.*, S.name AS state_name, COUNTRY.name AS country_name
      FROM
      company_office CO
          JOIN
      state S ON CO.state_id = S.id
          JOIN
      country COUNTRY ON S.country_id = COUNTRY.id
      WHERE CO.id=?`,
      values: [office_id],
    }, passerror(done, (result) => {
      if (!result.length) {
        return boom.notFound('Office not found..');
      }
      return done(null, result[0]);
    }))

    updateOffice=({ office_id, data }, done) => this.con.query({
      text: 'UPDATE ?? SET ? WHERE ??=?;',
      values: [tables.OFFICE, data, 'id', office_id],
    }, done)
}
