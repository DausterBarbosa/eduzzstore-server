require('dotenv/config');

const mongoose = require("mongoose");

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@eduzzstore.wqllw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
).then((response) => {
    console.log(response);
}).catch((err) =>{
    console.log(err);
});