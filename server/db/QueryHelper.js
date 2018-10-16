import Base from './BaseHelper';

export default class QueryHelper extends Base {
  constructor(db) {
    super(db);
    this.db = db;
  }
}
