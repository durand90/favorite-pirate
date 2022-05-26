const mongoose = require('mongoose');

const DB_NAME = 'pirate_db';

mongoose.connect("mongodb://127.0.0.1/"+DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));