const express= require('express');
const app=express();
const port=3000;

// app.get("/",(req, res)=>{
//     res.send("hello, Get Request");
// })

app.use(express.json());

app.post ("/submit",(req,res)=>{
    const { name }=req.body;
    res.send(`Hello ${name}`);
})

app.use(express.static('public'));
app.listen(port, () => {
    console.log('Server running at http://localhost:3000/');
});


app.get('/text',(req,req)=>{
    res.send('ini adalah response text.');
});

app.get('/html',(req,res)=>{
    res.send('<h1> Ini adalaah response html</h1>');
});

app.get('/json',(req,res)=>{
    res.json({message:'ini adalaah response json'});
});