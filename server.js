const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hell World!')
})

app.get('/user',(req,res)=>{res.send('User its you?')} )



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
  


