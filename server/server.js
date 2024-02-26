const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');







const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(bodyParser.json());


app.use('/auth', authRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});