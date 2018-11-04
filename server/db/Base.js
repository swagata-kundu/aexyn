import Boom from 'boom';
import _ from 'lodash';
import { format } from 'mysql';

export default class BaseHelper {
  constructor(db) {
    this.db = db;
    this.connection = this.db.pool;
  }

  typecast=(field, next) => {
    if (field.type === 'TINY' && field.length === 1) {
      return (field.string() === '1'); // 1 = true, 0 = false
    }
    return next();
  }

  query = ({ text, values = [] }, done) => {
    const modified_value = this.stringify(values);
    const that = this;
    if (!done || typeof done !== 'function') {
      return new Promise((resolve, reject) => {
        that.connection.query({
          sql: text,
          typeCast: this.typecast,
        }, modified_value, (err, result) => {
          if (err) {
            return reject(Boom.boomify(err));
          } return resolve(result);
        });
      });
    }
    return that.connection.query({
      sql: text,
      typeCast: this.typecast,
    }, modified_value, (err, result) => {
      if (err) {
        return done(Boom.boomify(err));
      } return done(null, result);
    });
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

  bulkInsert=({ tableName, values }, done) => {
    const text = `INSERT INTO ${tableName} SET ? ;`;
    const inserts = values.map(v => format(text, this.stringify(v)));
    if (inserts && !inserts.length) {
      return done();
    }
    return this.connection.query(inserts.join('\n'), done);
  }

  stringify=(values) => {
    if (_.isArray(values)) {
      return _.map(values, (v) => {
        if (_.isArray(v)) {
          return JSON.stringify(v);
        }
        return v;
      });
    }
    const obj = { ...values };
    _.keys(values).forEach((k) => {
      if (_.isArray(values[k])) {
        const v = values[k];
        obj[k] = JSON.stringify(v);
      }
    });
    return obj;
  }
}
