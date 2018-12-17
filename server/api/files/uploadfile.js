
module.exports = db => (req, res, next) => {
  let results = [];


  if (res.locals.files && res.locals.files.length) {
    results = res.locals.files;
  }

  return res.json(results);
};
