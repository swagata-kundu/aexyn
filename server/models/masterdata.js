import passerror from 'passerror';
import _ from 'lodash';

const constants = require('../common/constants');

export default class MasterData {
  constructor(con) {
    this.con = con;
  }

    labourtype=(done) => {
      const query = {
        text: 'SELECT * FROM labour_type;',
        values: [],
      };
      return this.con.query(query, done);
    }

    country=(done) => {
      const query = {
        text: `SELECT C.*,CONCAT('[',
      GROUP_CONCAT(JSON_OBJECT('state_id',
                  S.id,
                  'state_name',
                  S.name)),
      ']') AS states FROM country C JOIN state S ON S.country_id=C.id GROUP BY C.id;`,
        values: [],
      };
      this.con.query(query, (err, result) => {
        if (err) {
          return done(err);
        }
        const mod = result.map((r) => {
          try {
            let {
              states,
            } = r;
            states = JSON.parse(states);
            return {
              ...r,
              states,
            };
          } catch (pe) {
            return r;
          }
        });
        return done(null, mod);
      });
    }

    workPerformed=(done) => {
      const query = {
        text: 'SELECT * FROM work_performed;',
        values: [],
      };
      return this.con.query(query, done);
    }

    getSearchLocations=(done) => {
      const query = {
        text: `
        SELECT distinct(LOWER(location)) AS places from
        (SELECT 
            city AS location
        FROM
            company_office 
        UNION SELECT 
            S.name AS location
        FROM
            company_office CO
                JOIN
            state S ON CO.state_id = S.id 
        UNION SELECT 
            C.name AS location
        FROM
            company_office CO
                JOIN
            state S ON CO.state_id = S.id
                JOIN
            country C ON S.country_id = C.id) T1 order by places ASC;
        `,
        values: [],
      };
      return this.con.query(query, passerror(done, result => done(null, result.map(r => r.places))));
    }

    getCompanyTags=(company_id, done) => {
      const query = {
        text: 'SELECT distinct(tag) AS tag FROM company_tags where company_id=?;',
        values: [company_id],
      };
      return this.con.query(query, passerror(done, result => done(null, result.map(r => r.tag))));
    }

    getInvitationType=done => done(null, _.keys(constants.INVITATION_STATUS))
}
