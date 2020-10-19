var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "team-6-391",
    password: "cryptocurrency"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});