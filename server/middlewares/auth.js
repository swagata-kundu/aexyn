import Boom from 'boom';
import passerror from 'passerror';
import User from '../models/user';
import Qry from '../db/Query';

module.exports = db => (req, res, next) => {
  const user = new User(new Qry(db));
  const cookie_user = req.cookies ? req.cookies.user_id : null;
  // if (!req.session || !req.session.user_id) {
  //   return next(Boom.unauthorized('Session Expired'));
  // }
  if (!cookie_user) {
    return next(Boom.unauthorized('Session Expired'));
  }
  // const {
  //   user_id,
  // } = req.session;
  return user.getUserInfo(cookie_user, passerror(next, (result) => {
    if (!result.length) {
      return next(Boom.unauthorized('Invalid User'));
    }
    const userInfo = result[0];
    delete userInfo.password;
    res.locals.userInfo = {
      ...userInfo,
    };
    return next();
  }));
};
