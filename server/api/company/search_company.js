import DbHelper from '../../db/DbHelper';

module.exports = function searchCompany(db) {
  return async (req, res, next) => {
    const dbHelper = new DbHelper(db);
    const searchText = req.query.searchText ? `%${req.query.searchText}%` : '%%';
    const query = {
      text: `SELECT 
      C.*,
      CONCAT('[',
              GROUP_CONCAT(JSON_OBJECT('location_id',
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
              ']') AS locations
  FROM
      company C
          JOIN
      company_location CL ON C.id = CL.company_id
          LEFT JOIN
      state S ON CL.state_id = S.id
      WHERE C.name LIKE ?
  GROUP BY C.id;`,
      values: [searchText],
    };
    let result = [];
    try {
      result = await dbHelper.query(query);
    } catch (error) {
      return next(error);
    }
    return res.json(result);
  };
};
