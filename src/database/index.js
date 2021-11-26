require('dotenv/config');

const mongoose = require("mongoose");

mongoose.connect(
    `${process.env.DB_URL}`
).then((response) => {
    console.log(response);
}).catch((err) =>{
    console.log(err);
});