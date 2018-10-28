import async from 'async';
import Query from '../../db/Query';
import MasterData from '../../models/masterdata';


exports.getLabpurType = db => async (req, res, next) => {
  const master = new MasterData(new Query(db));
  master.labourtype((err, result) => {
    if (err) {
      return next(err);
    }
    return res.json(result);
  });
};


exports.getCountry = db => async (req, res, next) => {
  const master = new MasterData(new Query(db));
  master.country((err, result) => {
    if (err) {
      return next(err);
    }
    return res.json(result);
  });
};

exports.getWorkedPerformed = db => async (req, res, next) => {
  const master = new MasterData(new Query(db));
  master.workPerformed((err, result) => {
    if (err) {
      return next(err);
    }
    return res.json(result);
  });
};

exports.all = db => (req, res, next) => {
  const master = new MasterData(new Query(db));
  async.auto({
    labourType: cb => master.labourtype(cb),
    country: cb => master.country(cb),
    workPerformed: cb => master.workPerformed(cb),
  }, (err, results) => {
    if (err) {
      return next(err);
    }
    return res.json(results);
  });
};

exports.invitaionFilter = db => (req, res, next) => {
  const { userInfo } = res.locals;

  const master = new MasterData(new Query(db));
  async.auto({
    labourType: cb => master.labourtype(cb),
    workPerformed: cb => master.workPerformed(cb),
    tags: cb => master.getCompanyTags(userInfo.company_id, cb),
    locations: cb => master.getSearchLocations(cb),
    status: cb => master.getInvitationType(cb),

  }, (err, results) => {
    if (err) {
      return next(err);
    }
    return res.json(results);
  });
};
