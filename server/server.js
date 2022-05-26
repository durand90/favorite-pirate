const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

//middleware//
app.use(cors(), express.json(), express.urlencoded({extended: true}));



require('./config/mongoose.config');

//require('./routes/author.routes')(app);
require('./routes/pirate.routes')(app);




app.listen(PORT, () => console.log(`>>>>Listening on port: ${PORT}<<<<`))