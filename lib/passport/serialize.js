const User = require('../../models/user');
const passport = require('koa-passport');

passport.serializeUser((user, done) => {
    console.log('d')
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    console.log('f')
    User.findById(id, done);
});
