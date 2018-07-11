var mongoose = require('mongoose');
var blogSchema = require('./blogSchema');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/alumnos',{useNewUrlParser:true});

var Blog = mongoose.model('Blog',blogSchema,"blogs");