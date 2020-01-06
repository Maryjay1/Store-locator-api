const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
<<<<<<< HEAD
const connectDB = require('./config/db');
=======
>>>>>>> 48a176ae513c65236a4e1030d5194be36b7b2c8b

//load env vars
dotenv.config({path: './config/config.env' });

<<<<<<< HEAD
//connect to database
connectDB();

=======
>>>>>>> 48a176ae513c65236a4e1030d5194be36b7b2c8b
const app = express();

//body parser
app.use(express.json());

//Enable cors

app.use(cors());

<<<<<<< HEAD
//Routes
=======


>>>>>>> 48a176ae513c65236a4e1030d5194be36b7b2c8b


app.use('/api/v1/stores', require('./routes/stores'));

<<<<<<< HEAD
=======


>>>>>>> 48a176ae513c65236a4e1030d5194be36b7b2c8b
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
