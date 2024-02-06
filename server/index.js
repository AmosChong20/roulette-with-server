const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes');

app.use(cors());
app.use('/api', routes);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
