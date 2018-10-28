import passerror from 'passerror';
import User from '../models/user';
import Qry from '../db/Query';

module.exports = db => (req, res, next) => {
  const user = new User(new Qry(db));
  const cookie_user = req.cookies ? req.cookies.user_id : null;

  // if (!req.session || !req.session.user_id) {
  //   return res.redirect('/');
  // }
  if (!cookie_user) {
    return res.redirect('/');
  }
  // const {
  //   user_id,
  // } = req.session;
  return user.getUserInfo(cookie_user, passerror(next, (result) => {
    if (!result.length) {
      return res.redirect('/');
    }
    const userInfo = result[0];
    delete userInfo.password;
    res.locals.userInfo = {
      ...userInfo,
    };
    return next();
  }));
};
