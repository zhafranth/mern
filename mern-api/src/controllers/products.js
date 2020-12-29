exports.createProduct = (req, res, next) => {
  console.log("request: ", req.body);
  const name = req.body.name;
  const price = req.body.price;
  res.json({
    messege: "create product success",
    data: {
      id: 1,
      name: name,
      price: price,
    },
  });
  next();
};

exports.getAllProducts = (req, res, next) => {
  res.json({
    messege: "Get All Products success",
    data: [
      {
        id: 1,
        name: "biskuat",
        price: 9000,
      },
    ],
  });
  next();
};
