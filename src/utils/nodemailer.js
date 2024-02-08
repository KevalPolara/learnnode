const nodemailer = require("nodemailer");
const fs = require('fs');

const sendMail = async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "email",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "kevalpolara5272@gmail.com",
        pass: "iiwi gqzh clyq sadg"
      }
    });

    // Read the content of the image file
    const imageContent = fs.readFileSync('src/temp/imageone.jpg');
    const imageContentone = fs.readFileSync('src/temp/imagetwo.jpg');
    const info = await transporter.sendMail({
      from: {
        name: "keval Polara",
        address: "<kevalpolara5272@gmail.com>"
      },
      to: "kevalpolara5272@gmail.com",
      subject: "This is All About Verification Mail Releted",
      text: "Hello world?",
      html: "<b>Hello world?</b>",
      attachments: [
        {
          filename: 'imageone.jpg',
          content: imageContent,
          encoding: 'base64' // You may need to set the encoding based on your image type
        },
        {
          filename: 'imagetwo.jpg',
          content: imageContentone,
          encoding: 'base64' // You may need to set the encoding based on your image type
        }
      ]
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  sendMail
};




