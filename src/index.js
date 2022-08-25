const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const route = require('./routes')
const methodOverride = require('method-override')
const db = require('./config/db/')
const app = express();
const port = 3000;

// connect to db
db.connect()

app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(bodyParser.json());

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(methodOverride('_method'))

//HTTP Logger
app.use(morgan('combined'));
// Template engine
app.engine(
  'hbs', 
  engine({
    extname: 'hbs',
    helpers: {
      sum: (a, b) => a + b,
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
