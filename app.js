const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require("path");

const config = require("./config");

const { routes } = require("./routes");

const app = express();
app.set('port', config.service.port);

app.use(cors());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use('/files/planets', express.static(path.resolve(__dirname, 'public', 'imgs')));

app.use(routes);


app.listen(config.service.port, () => {
    console.log("API Solar System Service");
    console.log("Running on port: " + config.service.port);
});