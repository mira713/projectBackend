const express = require('express');
require('dotenv').config();
const {connection}= require('./config/db')
const cors = require('cors');
const app = express();
const {productRouter} = require('./routes/Product.router')


app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('welcome to project')
});


app.use('/products',productRouter)

let port = process.env.port

app.listen(port,async()=>{
    await connection
    console.log(`port running on ${port}`)
    console.log('connected to db')
})