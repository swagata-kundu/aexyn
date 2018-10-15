import Boom from 'boom';

export default class DbHelper {
  constructor(db) {
    this.db = db;
  }

    query = ({ text, values }) => new Promise((resolve, reject) => {
      this.db.pool.query(text, values, (err, result) => {
        if (err) {
          return reject(Boom.boomify(err));
        } return resolve(result);
      });
    })


    transaction = () => {}

    insert = () => {}
}
