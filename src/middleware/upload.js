const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/temp");
  },

  filename: function(req, file, cb) {
    try {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);

      const ext = path.extname(file.originalname).toLowerCase();

      if (!isValidFileType(ext)) {
        throw new Error("Please add png, jpg, jpeg, or svg File");
      }

      cb(null, file.fieldname + "-" + uniqueSuffix + ext);
    } catch (error) {
      cb(error); // Pass the error to the callback
    }
  }
});

function isValidFileType(ext) {
  const allowedExtensions = [".png", ".jpg", ".jpeg", ".svg"];
  return allowedExtensions.includes(ext);
}

const upload = multer({ storage: storage });

module.exports = {
  upload
};
