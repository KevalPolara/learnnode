const nodemailer = require("nodemailer");
const fs = require("fs");
const pdfmake = require("pdfmake/build/pdfmake");
const vfsFonts = require("pdfmake/build/vfs_fonts");
const { categoryService, orderService } = require("../services");
const order = require("../models/order.model");

pdfmake.vfs = vfsFonts.pdfMake.vfs;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kevalpolara5272@gmail.com",
    pass: "iiwi gqzh clyq sadg"
  }
});

const imageurl = fs.readFileSync("./src/temp/imageone.jpg", "base64");

const sendMailandPdf = async (req, res) => {
  const orderData = await orderService.getOrder();

  res.status(200).json({
    message: "Order Completed",
    status: true,
    data: orderData
  });

  const docDefinition = {
    content: [
        {
            table: {
                body: [
                    [
                        "Sl. No",
                        "Description",
                        "Unit Price",
                        "Qty",
                        "Net Amount",
                        "Tax Rate",
                        "Tax Type",
                        "Tax Amount",
                        "Total Amount"
                    ],
                    // Use flatMap to flatten the nested arrays
                    ...(orderData?.flatMap((product) =>
                        product?.products?.map((value) => [
                            `${product?._id || ''}`,
                            `${value?.description || ''}`,
                            `${value?.price || ''}`,
                            `${value?.qty || ''}`,
                            `${value?.price * value?.qty || ''}`,
                            "9%",
                            ["CGST", "SGST"],
                            [`${(value?.price * 9) / 100}`, `${(value?.price * 9) / 100}` || ''],
                            `${value?.price + ((value?.price * 9 / 100) * 2) || ''}`
                        ])
                    ) || [])
                ]
            }
        }
    ],

    defaultStyle: {
        font: "Roboto"
    },
    styles: {
        header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10]
        },
        subheader: {
            fontSize: 14,
            bold: true,
            margin: [0, 10, 0, 5]
        },
        body: {
            fontSize: 12,
            margin: [0, 0, 0, 10]
        }
    }
};

  const pdfDoc = pdfmake.createPdf(docDefinition);

  pdfDoc.getBase64(encodedPdf => {
    const mailOptions = {
      from: "kevalpolara5272@gmail.com",
      to: "kevalpolara5272@gmail.com",
      subject: "Send a Pdf Threw an Email",
      text: "Hello, Please find the attached PDF document.",
      attachments: [
        {
          filename: "sample.pdf",
          content: encodedPdf,
          encoding: "base64"
        }
      ]
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  });
};



// const docDefinition = {
//     content: [
//         {
//             table: {
//                 body: [
//                     [
//                         "Sl. No",
//                         "Description",
//                         "Unit Price",
//                         "Qty",
//                         "Net Amount",
//                         "Tax Rate",
//                         "Tax Type",
//                         "Tax Amount",
//                         "Total Amount"
//                     ],
//                     // Use map to generate rows dynamically
//                     ...orderData.flatMap((product) => {
//                         return product.products.map((value) => [
//                             `${product._id}`,
//                             `${value.description}`,
//                             `${value.price}`,
//                             `${value.qty}`,
//                             `${value.price * value.qty}`,
//                             "9%", // Tax Rate
//                             ["CGST", "SGST"], // Tax Type
//                             [`${(value.price * 9) / 100}`, `${(value.price * 9) / 100}`], // Tax Amount
//                             `${value.price + (value.price * 9 / 100) * 2}`
//                         ]);
//                     })
//                 ]
//             }
//         }
//     ],

//     defaultStyle: {
//         font: "Roboto"
//     },
//     styles: {
//         header: {
//             fontSize: 18,
//             bold: true,
//             margin: [0, 0, 0, 10]
//         },
//         subheader: {
//             fontSize: 14,
//             bold: true,
//             margin: [0, 10, 0, 5]
//         },
//         body: {
//             fontSize: 12,
//             margin: [0, 0, 0, 10]
//         }
//     }
// };



  

module.exports = {
  sendMailandPdf
};
