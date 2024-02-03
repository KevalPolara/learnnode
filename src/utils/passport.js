const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const connectGooglePassport = async () => {
    try{
        await passport.use(new GoogleStrategy({
            clientID: "460099340175-50bvqq6jb0ju7patdi6v9qh0kc2m7j2n.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:3000/v1/user/google/callback"
          },
          function(accessToken, refreshToken, profile, cb) {
            // User.findOrCreate({ googleId: profile.id }, function (err, user) {
            //   return cb(err, user);
            // });
          }
        ));

    }catch(error){
      console.log(error.message);
    }
}

const connectFacebookPassport = async () => {
  try {

   await passport.use(new FacebookStrategy({
      clientID: '1038467364116818',
      clientSecret: 'c5d902412f67878905d6a5acee1556ec',
      callbackURL: "http://localhost:3000/v1/user/facebook/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
      // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
    }
  ));
    
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  connectGooglePassport,
  connectFacebookPassport
}
  


