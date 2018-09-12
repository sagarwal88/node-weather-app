console.log('Starting app');
const express = require('express');
const port = process.env.PORT || 8789;

var app = express();

app.get('/', (req, res) => {
    res.send('Hello there');
});

app.listen(port, () => {
    console.log('Server started at port ' + port);
});
