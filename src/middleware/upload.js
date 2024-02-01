const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function(req, file, cb) {
    console.log(file);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    const ext = path.extname(file.originalname).toLowerCase();

    if(ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg" && ext !== ".svg"){
         throw new Error({message : "Please add png, jpg,jpeg or svg File"});
    }

    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  }
});

const upload = multer({ storage: storage });

module.exports = {
  upload
};
