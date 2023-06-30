require("dotenv").config();
var sequalize = require('sequelize')

var db = new sequalize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        dialect: "mysql",
        host: process.env.DB_HOST
    },{

    }
)
db.sync()

module.exports = db;


