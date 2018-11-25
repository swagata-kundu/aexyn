import passerror from 'passerror';
import Query from '../db/Query';

export default function handler(db) {
  return (req, res) => {
    const renderLogin = () => res.render('sign-in');

    const qry = new Query(db);
    const { hash } = req.params;
    const { company } = req.query;

    res.clearCookie('company_id');
    res.clearCookie('office_id');
    res.clearCookie('qset_id');

    if (!company) {
      qry.query({
        text: 'SELECT * FROM question_set where hash=?;',
        values: [hash],
      }, passerror(renderLogin, (r) => {
        if (!r.length) {
          return renderLogin();
        }
        const { id } = r[0];
        res.cookie('qset_id', id);
        return res.render('create-account');
      }));
    } else {
      qry.query({
        text: 'SELECT * FROM company_join_invitation where hash=?;',
        values: [hash],
      }, passerror(renderLogin, (r) => {
        if (!r.length) {
          return renderLogin();
        }
        const { company_id, office_id } = r[0];
        res.cookie('company_id', company_id);
        res.cookie('office_id', office_id);
        return res.render('create-account');
      }));
    }
  };
}
