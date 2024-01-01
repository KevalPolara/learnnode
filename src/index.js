const express = require("express");

const app = express();

app.use(express.json());

const routes = require("./routes/v1/index");

app.use("/v1", routes);
  
app.use((err, req, res) => {
  if (err) {
    res.send(404).json(err);
  }
  
    res.send("Something Went Wrong:-");
});

app.listen(3000, () => {
  console.log("Server Started Succesfully");
});
