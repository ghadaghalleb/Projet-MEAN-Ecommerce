const express = require('express');
const cors = require('cors');
require('./database/db');
const app = express();

app.use(express.json())
const User = require('./models/User');
const Product = require('./models/Product');
const userRoutes = require('./routes/userRoutes');

//connect db
app.use(cors());
app.use('/api/users', userRoutes);

//routes products

app.use('/api/products/', require('./routes/productRoutes'))

const port = process.env.PORT || 8200;
app.listen(port, () => {
    console.log(`Serve at : http://localhost:${port}`)
})