var mongoose = require('mongoose');
var schema = require('./schema');

//conexión
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/alumnos',{useNewUrlParser:true});

//modelo
var User = mongoose.model('User',schema,"ejercicio2");

//Documento en RAM
var user1 = new User({
    name:'User 1',
    email:'user1@ittepic.edu.mx'
});

var user2 = new User({
    name:'User 2',
    email:'user2@ittepic.edu.mx'
});

//Guardo utilizando la instancia del modelo User
user1.save((error) => {
    if(error) {
        console.log(error);
        process.exit(1);
    }
    console.log("Saved User 1!!");
});

//Guardo utilizando directamente el modelo y un objeto
//denominado user2
User.create(user2, (error) => {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log("Saved User 2!!");
});

//Guardo utilizando directamente el modelo y un objeto
//directamente en el metodo create
User.create({name:'User 3', email:'user3@ittepic.edu.mx'},
            (error) => {
                if (error) {
                    console.log(error);
                    process.exit(1);
                }
                console.log("Saved User 3!!");
                process.exit(0); 
            });