const express=require('express')
const app=express();
const bodyparser = require('body-parser');
const user=require('./Routes/user')
const message=require('./Routes/message')

app.use(bodyparser.urlencoded({extended:false}));

app.use('/user',user)
app.use('/',message)

app.listen('3000')