const express = require('express')
const app = express()
const port = 3000
const sequelize = require('./src/Associations/associations')
const userRouter = require('./src/Routers/userRouter');
const bodyParser =require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/api/user', userRouter);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
  


