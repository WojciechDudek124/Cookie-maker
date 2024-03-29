const express = require('express');
const cookieParser = require('cookie-parser');
const {homeRouter} = require('./routes/home');
const {orderRouter} = require('./routes/order');
const {configuratorRouter} = require("./routes/configurator");
const hbs = require('express-handlebars');
const {handlebarsHelpers} = require("./utils/handlebars-helpers");

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

app.engine('.hbs', hbs.engine({
    extname:'.hbs',
    helpers: handlebarsHelpers,
}));
app.set('view engine', 'hbs');

app.use('/', homeRouter);
app.use('/configurator', configuratorRouter );
app.use('/order', orderRouter);

app.listen(3000,'localhost');