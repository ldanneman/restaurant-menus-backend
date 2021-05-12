const data = require("../Data/restaurantData.json");
const fs = require("fs");

const restData = (req, res) => {
  res.send(data);
};

const updateData = (req, res) => {
  //   fs.unlinkSync("./Data/restaurantData.json");
  //   fs.writeFileSync("./Data/restaurantData.json", JSON.stringify(req.body));
  //   console.log(req.body);
  fs.writeFile(
    "./Data/restaurantData.json",
    JSON.stringify(req.body),
    function (err) {
      if (err) return console.log(err);
    }
  );
  res.send(req.body);
};

module.exports = {
  restData,
  updateData,
};
