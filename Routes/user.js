const express = require('express')
const app = express();


app.get('/login', (req, res, next) => {
    res.send('<form action="/user/post" onsubmit="localStorage.setItem(`username`, document.getElementById("userName").value)" method="POST"><label>Type your Username</label><input type="text" name="username" id="userName"/><button type="submit">Submit</button></form>')
})
app.post('/post', (req, res, next) => {
    res.redirect('/message');
})
module.exports = app;