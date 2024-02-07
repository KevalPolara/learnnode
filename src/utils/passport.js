const passport = require("passport");
const { User } = require("../models/index.");
const { accessRefreshToken } = require("../controller/user.controller");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const connectGooglePassport = async () => {
  try {
    await passport.use(
      new GoogleStrategy(
        {
          clientID:
            "460099340175-50bvqq6jb0ju7patdi6v9qh0kc2m7j2n.apps.googleusercontent.com",
          clientSecret: "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",
          callbackURL: "http://localhost:3000/v1/user/google/callback"
        },
        async function(accessToken, refreshToken, profile, cb) {
          console.log(profile);

          try {
            const user = await User.findOne({googleId: profile.id});

            console.log(user, "Keval Polara");

            if (!user) {
              const user = await User.create({
                googleId: profile.id,
                name: profile.displayName,
                role: "user"
              });

              const {refreshToken} = await accessRefreshToken(user._id);

              user.refreshToken = refreshToken;
              user.save();

              return cb(null, user);
            }

            return cb(null, user);
          } catch (error) {
            return cb(error.message, null);
          }
        }
      )
    );

    passport.serializeUser(function(user, done) {
      console.log(user.id, "asjdfgfdns");
      done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
      console.log(id, "keval Polara");
      try {
        User.findById(id, function(err, user) {
          console.log(user, "Deserialized User"); // Add this log statement
          done(err, user);
        });
      } catch (error) {
        console.log(error.message);
        return done(error.message, null); // Pass the error to done callback
      }
    });

  } catch (error) {
    console.log(error.message);
  }
};

const connectFacebookPassport = async () => {
  try {
    await passport.use(
      new FacebookStrategy(
        {
          clientID: "1038467364116818",
          clientSecret: "c5d902412f67878905d6a5acee1556ec",
          callbackURL: "http://localhost:3000/v1/user/facebook/callback"
        },
        function(accessToken, refreshToken, profile, cb) {
          // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
          //   return cb(err, user);
          // });
        }
      )
    );
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  connectGooglePassport,
  connectFacebookPassport
};

passport.serializeUser(function(user, done) {
  console.log(user.id, "asjdfgfdns");
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log(id, "keval Polara");
  try {
    User.findById(id, function(err, user) {
      console.log(user, "Deserialized User"); // Add this log statement
      done(err, user);
    });
  } catch (error) {
    console.log(error.message);
    return done(error.message, null); // Pass the error to done callback
  }
});
