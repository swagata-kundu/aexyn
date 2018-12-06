import passerror from 'passerror';
import _ from 'lodash';

export default class Permission {
  constructor(con) {
    this.con = con;
  }

    getUserPermission=(company_id, done) => {
      const query = {
        text: `SELECT 
        U.first_name,
        U.last_name,
        UMP.id AS supplier_permissionId,
        UMP.permission AS supplier_permission,
        UMP.autoAdd AS supplier_autoAdd,
        U.id AS user_id,
        UOP.job_title,
        UJP.id AS jungle_permissionId
    FROM
        user U
            JOIN
        user_office_profile UOP ON UOP.user_id = U.id
            JOIN
        company_office CO ON CO.id = UOP.office_id
            LEFT JOIN
        user_mfs_permission UMP ON UMP.user_id = U.id
            LEFT JOIN
        user_jungle_permission UJP ON UJP.user_id = U.id
        WHERE CO.company_id=?
        AND UOP.isPrimaryOffice=true;
    `,
        values: [company_id],
      };
      return this.con.query(query, done);
    }

    getCompanyPermission=(company_id, done) => {
      const query = {
        text: `SELECT 
        *
    FROM
        company_qm_permission
    WHERE
        company_id = ?;
      `,
        values: [company_id],
      };
      return this.con.query(query, passerror(done, result => done(null, _.get(result, '0', {}))));
    }
}
