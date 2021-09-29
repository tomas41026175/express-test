//import express
const express = require('express')
const app = express()

//import engine
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({defaultLayout:'main'}))
app.set('view engine','handlebars')

//set port
const port = 3000

//set listen
app.listen(port,()=>{
    console.log(`Express is running on ${port}`)
})

// create pageNames Array
const pageNames = ['food','about','portfolio','contact']

//use public file
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.render('index',{ pageNames: pageNames })
})

app.get('/:pageName',(req,res)=>{
    res.render('index',{ pageName: req.params.pageName , pageNames: pageNames })
})




