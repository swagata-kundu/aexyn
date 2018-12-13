
import passerror from 'passerror';
import Query from '../../db/Query';
import { sp } from '../../db';


module.exports = db => (req, res, next) => {
  const qry = new Query(db);
  qry.query({
    text: 'CALL ?? (?)',
    values: [sp.GET_INVITATION_HISTORY, req.params.invitation_id],
  }, passerror(next, (result) => {
    const history = result[0];
    const invitees = result[1];
    return res.json({
      history,
      invitees,
    });
  }));
};
