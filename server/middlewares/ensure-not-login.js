module.exports = db => (req, res, next) => {
  const cookie_user = req.cookies ? req.cookies.user_id : null;

  // if (!req.session || !req.session.user_id) {
  //   return res.redirect('/');
  // }
  if (cookie_user) {
    return res.redirect('/qualification-manager/manage-food-suppliers');
  }
  return next();

  // const {
  //   user_id,
  // } = req.session;
};
