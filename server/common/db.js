
import Mysql from 'mysql';
import Config from 'config';


export default class Db {
    constructor() {
        this.pool = null;
    }
    connect() {
        this.pool = Mysql.createPool(Config.get('db'));
    }
    getConnection(done) {
        if (!this.connectionPool) {
            return done();
        }
        return this.pool.getConnection(done);
    }
}
