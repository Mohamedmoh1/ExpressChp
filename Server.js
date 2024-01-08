const express = require ('express')

const app = express()

const port = 5000

app.use(express.static('public'))

app.get('/Contact',(req,res)=>{
    res.sendFile(__dirname+"/public/Contact.html")
})

app.get('/Home',(req,res)=>{
    res.sendFile(__dirname+"/public/Home.html")
})

app.get('/Services',(req,res)=>{
    res.sendFile(__dirname+"/public/Services.html")
})

app.listen(port,console.log(`Server is Running 5000... ${port}`))
