const data = require("../Data/restaurantData");
const fs = require("fs");

const restData = (req, res) => {
  res.send(data.restaurantsData);
};

const updateData = (req, res) => {
  res.send(req.body);
  fs.writeFile(
    "./Data/restaurantData.js",
    JSON.stringify(req.body),
    function (err) {
      if (err) return console.log(err);
    }
  );
};

module.exports = {
  restData,
  updateData,
};
