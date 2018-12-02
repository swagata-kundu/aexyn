module.exports = db => (req, res, next) => {
  const results = req.files.map(f => ({
    file_name: f.originalname,
    url: f.path,
  }));

  return res.json(results);
};
