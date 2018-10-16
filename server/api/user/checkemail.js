import Joi from 'joi';
import QueryHelper from '../../db/QueryHelper';

module.exports = function checkEmail(db) {
  return async (req, res, next) => {
    const validtaionSchema = {
      email: Joi.string().email().required().trim(),
    };
    const {
      error,
    } = Joi.validate(req.params, validtaionSchema);
    if (error) {
      return next(error);
    }
    const queryHelper = new QueryHelper(db);
    const query = {
      text: 'SELECT count(id) AS userCount FROM user where email=?;',
      values: [req.params.email],
    };
    try {
      const result = await queryHelper.query(query);
      return res.json({ exists: !!result[0].userCount });
    } catch (dberror) {
      return next(dberror);
    }
  };
};
