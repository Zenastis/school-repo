const mysql = require('mysql');
const inquirer = require('inquirer');

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: '',
  database: 'greatBay_DB',
});

// function which prompts the user for what action they should take
const start = () => {

};

// function to handle posting new items up for auction
const postAuction = () => {
  // prompt for info about the item being put up for auction

};

const bidAuction = () => {
  // query the database for all items being auctioned
  
};

// connect to the mysql server and sql database
connection.connect((err) => {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});
