import Base from './Base';

export default class QueryHelper extends Base {
  constructor(db) {
    super(db);
    this.db = db;
  }
}
