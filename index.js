const express = require("express");
const sequelize = require("./config/db.js");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes.js");
const app = express();

const port = 4000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

sequelize
  .authenticate()
  .then(() => {
    console.log(" Database connection successful !");
    return sequelize.sync({ force: false });
  })
  .catch((err) => {
    console.error(" Database connection error...", err);
  });

module.exports = sequelize;
