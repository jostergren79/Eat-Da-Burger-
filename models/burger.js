const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection");

// Creates a "Burger" model that matches up with DB
const Burger = sequelize.define("burger", {
  burger_name: Sequelize.STRING,
  devoured: Sequelize.BOOLEAN
});

// Syncs with DB
Burger.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = Burger;

