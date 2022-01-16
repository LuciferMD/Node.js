const express = require('express')
const app = express()
const port = 3000
const userRouter = require('./src/Routers/userRouter');
const playlistRouter = require('./src/Routers/playlistRouter');
const musicRouter = require ('./src/Routers/musicRouter')
const likeRouter =require ('./src/Routers/likeRouter');
const commentRouter = require('./src/Routers/commentRouter');
const genreRouter = require('./src/Routers/genreRouter');
const followerRouter = require('./src/Routers/followerRouter');
const accountRouter =require('./src/Routers/accountRouter');
const bodyParser =require('body-parser');
const passport = require('passport');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./src/Swagger/doc.json')
const logger = require('./src/Logger/logger')
const mongoose = require('mongoose');
const mongoOptions = require('./src/config/mongo_config')


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


//swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



app.use('/api/user', userRouter);
app.use('/api/playlist',playlistRouter);
app.use('/api/music',musicRouter);
app.use('/api/like', likeRouter);
app.use('/api/comment',commentRouter);
app.use('/api/genre', genreRouter);
app.use('/api/follower',followerRouter);

app.use('/api',accountRouter);
app.use(passport.initialize());

require('./src/Middleware/passport')(passport);


app.listen(port, async() => {

  logger(
    {
        message: `App listening at http://locallhost:3000`,
        level: 'INFO',
    });


  // mongoose
  mongoose.connect(
    `mongodb://${mongoOptions.url}/${mongoOptions.collectionName}`, 
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
})
  


//return all playlist and music don't work