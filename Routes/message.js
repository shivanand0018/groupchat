const express=require('express')
const router=express();
const fs=require('fs')

router.get('/message',(req,res,next)=>{
    fs.readFile('message.txt',(err,data)=>{
    res.send(`${data}<form action="/send" method="POST"><label>Type your Message</label><input type="description" name="message"/><input hidden name="username" value=localStorage.getItem('username')></input><button>Send</button</form>`)
})
})

router.post('/send',(req,res,next)=>{
    console.log(req.body);
    fs.writeFile('message.txt',`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>{

    })
    res.redirect('/message')
})

module.exports=router