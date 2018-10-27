import async from 'async';
import Query from '../../db/Query';

function labourtype(db, done) {
  const queryHelper = new Query(db);
  const query = {
    text: 'SELECT * FROM labour_type;',
    values: [],
  };
  return queryHelper.query(query, done);
}

function country(db, done) {
  const queryHelper = new Query(db);
  const query = {
    text: `SELECT C.*,CONCAT('[',
    GROUP_CONCAT(JSON_OBJECT('state_id',
                S.id,
                'state_name',
                S.name)),
    ']') AS states FROM country C JOIN state S ON S.country_id=C.id GROUP BY C.id ORDER BY S.name ASC;`,
    values: [],
  };
  queryHelper.query(query, (err, result) => {
    if (err) {
      return done(err);
    }
    const mod = result.map((r) => {
      try {
        let {
          states,
        } = r;
        states = JSON.parse(states);
        return {
          ...r,
          states,
        };
      } catch (pe) {
        return r;
      }
    });
    return done(null, mod);
  });
}

function workPerformed(db, done) {
  const qry = new Query(db);
  const query = {
    text: 'SELECT * FROM work_performed;',
    values: [],
  };
  return qry.query(query, done);
}

exports.getLabpurType = db => async (req, res, next) => {
  labourtype(db, (err, result) => {
    if (err) {
      return next(err);
    }
    return res.json(result);
  });
};


exports.getCountry = db => async (req, res, next) => {
  country(db, (err, result) => {
    if (err) {
      return next(err);
    }
    return res.json(result);
  });
};

exports.getWorkedPerformed = db => async (req, res, next) => {
  workPerformed(db, (err, result) => {
    if (err) {
      return next(err);
    }
    return res.json(result);
  });
};

exports.all = db => async (req, res, next) => {
  async.auto({
    labourType: cb => labourtype(db, cb),
    country: cb => country(db, cb),
    workPerformed: cb => workPerformed(db, cb),
  }, (err, results) => {
    if (err) {
      return next(err);
    }
    return res.json(results);
  });
};
