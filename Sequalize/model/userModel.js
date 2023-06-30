const sequelize = require("sequelize");
const db = require("../config/database");


let user = db.define(
    'user',
    {
        id: {type : sequelize.INTEGER, primaryKey : true},
        username : { type : sequelize.STRING},
        password : { type : sequelize.STRING},
        token : { type : sequelize.STRING}
    }, {
        timestamps : false,
    }
);

module.exports = user