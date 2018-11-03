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
        text: `SELECT 
        country.*, state.name AS state_name, state.id AS state_id
    FROM
        country
            JOIN
        state ON country.id = state.country_id
        ORDER BY country.name ASC, state.name ASC; `,
        values: [],
      };
      this.con.query(query, passerror(done, (result) => {
        const a = _.chain(result).groupBy('name').map((v) => {
          const { id, name } = _.first(v);
          return {
            id,
            name,
            states: _.map(v, ({ state_name, state_id }) => ({ state_name, state_id })),
          };
        }).values();
        return done(null, a);
      }));
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
