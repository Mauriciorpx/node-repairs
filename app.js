const express = require('express');

/* Routers */
const { usersRouter } = require('./routes/users.routes');
const { repairsRouter } = require('./routes/repairs.routes');

//import DB connection
const { db } = require('./utils/database');

//create express instance and store in a variable
const app = express();

//Enable incoming JSON Data

app.use(express.json());

//Endpoints

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

//Database Connect and sync

db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log(err));

db.sync({})
  .then(() => console.log('Database sync'))
  .catch((err) => console.log(err));

//Spin up server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT} with nodemon`);
});
