const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

require('./app/routes')(app, {});
app.use(express.static('public'))

app.listen(port, () => {
    console.log('We are live on ' + port);
});