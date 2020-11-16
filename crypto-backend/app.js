const express = require("express");

const app = express();
// parse requests of content-type - application/json
app.use(express.json());


// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const db = require("./models");
require("./routes/user_routes")(app);
require("./routes/wallet_routes")(app);
require("./routes/coin_routes")(app);
db.sequelize.sync();