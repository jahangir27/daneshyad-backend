const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2').Strategy;
import {Pod} from '../services';

require('dotenv').config();

passport.use(new OAuth2Strategy({
  authorizationURL: `${process.env.SSO_URL}authorize/?scope=profile`,
  tokenURL: `${process.env.SSO_URL}token/`,
  clientID: process.env.SSO_CLIENT_ID,
  clientSecret: process.env.SSO_CLIENT_SECRET,
  callbackURL: `${process.env.SERVER_ADDRESS}:${process.env.PROXY_SERVICE_PORT}/auth/callback/`
},
  function ( accessToken: any, refreshToken: any, profile: any, cb: any) {
    let user = {
      accessToken: accessToken,
      refreshToken: refreshToken,
      expires: profile.exp
    };  
    return cb(null, user);
  }
));

passport.serializeUser(function (user: any, done: any) {
  done(null, user);
});

passport.deserializeUser(function(user: any, done: any) {
  done(null, user);
});


