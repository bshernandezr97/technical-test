const express = require('express');

const app = express();
const port = process.env.PORT || 8081;


app.use(express.static('public'));

app.listen(port,() => {
    console.log(`Server listen in port ${port}`);
})


