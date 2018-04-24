const passport = require('../lib/passport/index');

module.exports.init = app => app.use(passport.initialize());
