const express = require('express');
const cors = require('cors')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8081;
require('./database/config').connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/movie', require('./routes/moviesRouter'));
app.use('/api/clasification', require('./routes/clasificationRouter'));
app.use(express.static('public'));
app.use('*', express.static('public'));

app.listen(port,() => {
    console.log(`Server listen in port ${port}`);
})


