const data = require("../Data/restaurantData");

const restData = (req, res) => {
  res.send(data.restaurantsData);
};

module.exports = {
  restData,
};
