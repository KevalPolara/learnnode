const { orderService } = require("../services");

const getOrder = async(req, res) => {
  const response = await orderService.getOrder(req.body);
  console.log(response);

  if (!response) {
    throw new Error("get order Error");
  }

  res.status(200).json({
    success: true,
    message: "get-order",
    data: response
  });
};

module.exports = {
  getOrder
};
