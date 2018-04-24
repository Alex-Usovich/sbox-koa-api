const passport = require('koa-passport');
const LocalStrategy = require('passport-local');
import { User } from '../../models/user';

module.exports = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
   try {
       const user = await User.query().findOne({email});

       if (!user || !user.checkPassword(password)) {
           return done(null, false, { message: 'User not found' });
       }

       if (!user.verifiedEmail) {
           return done(null, false, { message: 'Email is not verified' });
       }

       return done(null, user);
   } catch (err) {
       return done(err);
   }
});
