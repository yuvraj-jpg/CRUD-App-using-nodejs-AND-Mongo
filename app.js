const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');


const app=express();
const todoroute=require('./routes/todo');
const port=80;


mongoose.connect('mongodb+srv://yuvraj:yuvraj@uv.eymsz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


mongoose.connection.on('error',err=>{
    console.log('Connection Failed !!!!!!!')
});
mongoose.connection.on('connected',connected=>{
    console.log('Connection Successfull !!!!!!!')
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/',todoroute);


app.use((req, res, next) =>{
    res.status(404).json({
        message : 'Bad Url Request'
    })
});



app.use((req, res, next) =>{
    res.status(200).json({
        message : 'ok Report'
    })
});


module.exports=app;