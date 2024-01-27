const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')

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
