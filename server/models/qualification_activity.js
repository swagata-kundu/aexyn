import {
  tables,
} from '../db';

export default class QualificationActivity {
  constructor(con) {
    this.con = con;
  }

  add=(values, cb) => this.con.insert({
    tableName: tables.QUALIFICATION_ACTIVITIES,
    values,
  }, cb)
}
