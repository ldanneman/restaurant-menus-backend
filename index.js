const express = require("express");
const app = express();
const cors = require("cors");

const restaurantRoutes = require("./Routes/restaurants");

app.use(express.json());
app.use(cors());

app.use("/api/restaurantData", restaurantRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err
    ? console.log("there was a server error")
    : console.log(`Server is running on port ${PORT}`)
);
