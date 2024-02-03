const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: "dcnjl4naf",
  api_key: "859389873723789",
  api_secret: "i902ImKwjwJj5zOu407AndIC8_4"
});

const uploadFile = async path => {
  try {
    console.log(path , "Keval Polara");

    const result = await cloudinary.uploader.upload(path);

    console.log(result);

    fs.unlink(path);

    return result;
  } catch (error) {
    console.log(error.message);
  }
};

// const deleteFile = async(path) => {
//   try {
//     const result = await cloudinary.uploader.destroy(path);

//     console.log(result);

//     return result;

    
//   } catch (error) {
//     console.log(error.message);
//   }
// }

module.exports = {
  uploadFile,
};
