const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const multer = require('multer');
const {v4:uuid} = require('uuid');
const https = require('https');


const app = express();
const PORT = 9090;



const indexRoutes = require('./routes/index')

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDDELWARE
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use('/', indexRoutes);

app.listen(PORT, () => console.log(`listen on port ${PORT}`));
