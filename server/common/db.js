
import Mysql from 'mysql';
import Config from 'config';
import Boom from 'boom';


export default class Db {
  constructor() {
    this.pool = null;
  }

  connect=() => {
    this.pool = Mysql.createPool(Config.get('db'));
  }

  getConnection=(done) => {
    if (!this.pool) {
      return done(Boom.internal('Error in Database connection'));
    }
    return this.pool.getConnection((err, con) => {
      if (err) {
        return done(Boom.boomify(err));
      }
      return done(null, con);
    });
  }
}
