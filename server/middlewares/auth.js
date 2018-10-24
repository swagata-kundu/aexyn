import Boom from 'boom';
import passerror from 'passerror';
import User from '../models/user';
import Qry from '../db/Query';

module.exports = db => (req, res, next) => {
  const user = new User(new Qry(db));
  if (!req.session || !req.session.user_id) {
    return next(Boom.unauthorized('Session Expired'));
  }
  const {
    user_id,
  } = req.session;
  return user.getUserInfo(user_id, passerror(next, (result) => {
    if (!result.length) {
      return next(Boom.unauthorized('Invalide User'));
    }
    const userInfo = result[0];
    res.locals.userInfo = {
      ...userInfo,
    };
    return next();
  }));
};
