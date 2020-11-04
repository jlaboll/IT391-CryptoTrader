const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const db = require("./models");
db.sequelize.sync();
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Basic Request Seen." });
});
require("./routes/user_routes")(app);
require("./routes/wallet_routes")(app);
require("./routes/coin_routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});