const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const  session = require('express-session')
const passport = require('passport');
const cors = require('cors');
const { connectSocekt } = require("./utils/socket.io");

const {connectGooglePassport , connectFacebookPassport} = require("./utils/passport");

dotenv.config();

try{
  mongoose.connect(`${process.env.MONGODB_URL}${process.env.DATABASE_URL}`)
  .then(() => console.log('DataBase Connected'))
  .catch((error) => console.log("Connection error", error.message));

}catch(error){
  console.log('DataBase Connection error:',error.message);
}

const app = express();
app.use(cookieParser())

app.use(express.json());


app.use(session({ secret: 'mdfnldgngalngalkg', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors())


connectSocekt()
connectGooglePassport()
connectFacebookPassport()

const routes = require("./routes/v1/index");
app.use("/v1", routes);
  
// app.use((err, req, res) => {
//   if (err) {
//     res.send(404).json(err);
//   }
  
//     res.send("Something Went Wrong:-");
// });

app.listen(3000, () => {
  console.log("Server Started Succesfully");
});
