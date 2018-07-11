var mongoose = require('mongoose');
var blogSchema = require('./blogSchema');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/alumnos',{useNewUrlParser:true});

var Blog = mongoose.model('Blog',blogSchema,"blogs");

//Agregar blog
/*
var blog1 = new Blog({
    title:'Hasta el moño del orgullo',
    author:'Sarah Brenan',
    body:'Decía una amiga de mi madre muy estilosona que el verano es la época más hortera del año.',
    comments:[{body:'Regular', date:'1/07/2018'}],
    meta: {votes:3, favs:4}
})
*/

//Guardar
/*
blog1.save((error) => {
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Guardado");
    process.exit(0);
})
*/

//Consulta por autor
/*
Blog.find({author:'Sarah Brenan'}, (error, docs) => {
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("<------- Consulta por Autor------->");
    console.log(docs);
    process.exit(0);
});
*/

//Update con _id
Blog.update({_id:'5b45c42ef7b9a6433a53bbf6'},{$set: {hidden:true}},
(error, docs) => {
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("<------ Actualización ----->");
    console.log(docs);
    process.exit(0);
});