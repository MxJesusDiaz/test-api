const { default: colorizedLogger } = require("colorized-logs");

const express = require('express');
const morgan = require('morgan');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));
//Starting the server
app.listen(app.get('port'), () => {
    colorizedLogger.info(`Server is running on port: ${app.get('port')}` );
});