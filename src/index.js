const express = require('express');
const path = require('path');
const morgan = require('morgan');

//Inicializations
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan('dev'));

//Routes
app.use(require('./routes/index'));

//static files
//le decimos al serves que esa carpeta la usaran todos
app.use(express.static(path.join(__dirname, 'public')));



//start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});