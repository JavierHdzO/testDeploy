const express = require('express');
const path = require('path');
const hbs = require("hbs");

// const http = require('http');

// http.createServer( (req, res) => {

//     res.writeHead(200, { 'Content-Type': 'application/json'});

//     const persona = {
//         id:1,
//         name:'Javier'
//     }

//     res.write( JSON.stringify(persona) );
//     res.end();

// })
// .listen(3000);


//Init

const app = express();


//Settings
app.set('views', path.join(__dirname, 'views')); //set a new route to views

hbs.registerPartials( path.join( app.get('views'), 'partials' ), ( err )=>{
    console.error( err );
});

app.set('view engine', 'hbs');


//Middleware


//Global Variables
app.use( express.static( path.join( __dirname, 'public')));

//Routes

app.get('/', (req, res)=>{
    res.render('home', {
        Nombre: 'Javier',
        Title: 'Node'
    });
    //res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.get('/generic', ( req, res )=>{
    // res.sendFile(path.join( __dirname, 'public/generic.html'));
    res.render('generic', {
        Nombre: 'Javier',
        Title: 'Node'
    });

});

app.get('/elements', ( req, res )=>{
    // res.sendFile( path.join(__dirname, 'public/elements.html') );
    res.render('elements', {
        Nombre: 'Javier',
        Title: 'Node'
    });
});

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/404.html'));
});

// Static Files

// Route Not Found

module.exports = app;

