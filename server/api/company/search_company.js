import Query from '../../db/Query';

module.exports = function searchCompany(db) {
  return async (req, res, next) => {
    const queryHelper = new Query(db);
    const searchText = req.query.searchText ? `%${req.query.searchText}%` : '%%';
    const query = {
      text: `SELECT 
      C.*,
      CONCAT('[',
              GROUP_CONCAT(JSON_OBJECT('office_id',
                          CL.id,
                          'address1',
                          CL.address1,
                          'address2',
                          CL.address2,
                          'city',
                          city,
                          'zip',
                          zip,
                          'state',
                          S.name)),
              ']') AS offices
  FROM
      company C
          JOIN
          company_office CL ON C.id = CL.company_id
          LEFT JOIN
      state S ON CL.state_id = S.id
      WHERE C.name LIKE ?
  GROUP BY C.id;`,
      values: [searchText],
    };
    let result = [];
    try {
      result = await queryHelper.query(query);
    } catch (error) {
      return next(error);
    }
    const mod = result.map((r) => {
      try {
        let { offices, labour_type } = r;
        offices = JSON.parse(offices);
        labour_type = JSON.parse(labour_type);
        return { ...r, offices, labour_type };
      } catch (pe) {
        return r;
      }
    });
    return res.json(mod);
  };
};
