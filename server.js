const express = require('express')
const app = express()
const port = 3000
const userRouter = require('./src/Routers/userRouter');
const playlistRouter = require('./src/Routers/playlistRouter');
const musicRouter = require ('./src/Routers/musicRouter')
const bodyParser =require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/api/user', userRouter);
app.use('/api/playlist',playlistRouter);
app.use('/api/music',musicRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
  


