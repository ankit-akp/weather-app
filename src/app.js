const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app=express();
const port=process.env.PORT || 3000;
require('dotenv').config()

// Paths
const publicStaticPath=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials")

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(express.static(publicStaticPath));

app.get('/',(req,res)=>{
    // res.render('filename'); This will render file from views folder only.
    res.render('index');
});

app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/weather',(req,res)=>{
    res.render('weather');
})

app.get("*",(req,res)=>{
    // We will came here if above url failed to match
    res.render('404error');
})
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})