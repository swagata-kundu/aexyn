
import passerror from 'passerror';
import _ from 'lodash';
import Query from '../../db/Query';
import { SEARCH_OFFICE_EMPLOYEE } from '../../db/sp';

module.exports = db => (req, res, next) => {
  const qry = new Query(db);
  const { company_id } = req.params;
  const { userInfo } = res.locals;
  const query = {
    text: 'CALL ?? (?,?);',
    values: [SEARCH_OFFICE_EMPLOYEE, company_id, userInfo.company_id],
  };
  qry.query(query, passerror(next, (result) => {
    const r = result[0];
    const b = _.chain(r).groupBy('office_id').map((values) => {
      const employees = values.filter(v => !!v.email);
      const {
        company_name, img, office, office_id,
      } = _.last(values);
      return ({
        employees, company_name, img, office, office_id,
      });
    });
    return res.json(b.value());
  }));
};
