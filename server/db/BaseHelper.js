import Boom from 'boom';
import _ from 'lodash';

export default class BaseHelper {
  constructor(db) {
    this.db = db;
    this.connection = this.db.pool;
  }

  query = ({ text, values }, done) => {
    const modified_value = this.stringify(values);
    const that = this;
    if (!done || typeof done !== 'function') {
      new Promise((resolve, reject) => {
        that.connection.query(text, modified_value, (err, result) => {
          if (err) {
            return reject(Boom.boomify(err));
          } return resolve(result);
        });
      });
    } else {
      that.connection.query(text, modified_value, (err, result) => {
        if (err) {
          return done(Boom.boomify(err));
        } return done(null, result);
      });
    }
  }

  insert=async ({ tableName, values }, done) => {
    const text = `INSERT INTO ${tableName} SET ? ;`;
    try {
      const { insertId } = await this.query({ text, values });
      return done(null, insertId);
    } catch (error) {
      return done(error);
    }
  }

  stringify=(values) => {
    if (_.isArray(values)) {
      return _.map(values, (v) => {
        if (_.isObjectLike(v)) {
          return JSON.stringify(values);
        }
        return v;
      });
    }
    const obj = { ...values };
    _.keys(values).forEach((k) => {
      if (_.isObjectLike(values[k])) {
        const v = values[k];
        obj[k] = JSON.stringify(v);
      }
    });
    return obj;
  }
}
