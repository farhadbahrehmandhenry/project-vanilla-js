const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const app = express();

dotenv.config();

mongoose.connect(
  process.env.mongoDbUrl,
  {useNewUrlParser: true},
  () => console.log('Connected to db!')
)

// in order to read the res.body in auth.js
app.use(bodyParser.json());
app.use('/api/user', authRoute);
app.listen(3000, () => console.log('server is running!'));
