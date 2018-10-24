import Async from 'async';
import Base from './Base';

export default class TxHelper extends Base {
  constructor(db) {
    super(db);
    this.db = db;
  }

  beginTransaction = (done) => {
    Async.waterfall([
      (cb) => {
        this.db.getConnection((err, con) => {
          if (err) {
            return cb(err);
          }
          this.connection = con;
          return cb(err, con);
        });
      },
      (con, cb) => {
        con.beginTransaction(cb);
      },
    ], err => done(err));
  }

  commitTransaction=(done) => {
    this.connection.commit((err) => {
      if (err) {
        this.connection.rollback(() => {
          this.connection.release();
          return done(err);
        });
      } else {
        this.connection.release();
        return done();
      }
    });
  };

  rollbackTransaction=(done) => {
    if (this.connection && this.connection.rollback) {
      this.connection.rollback(() => {
        this.connection.release();
        return done();
      });
    } else {
      return done();
    }
  }
}
