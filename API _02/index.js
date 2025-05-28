const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([{
    'Name' : 'Janitha Dilsham',
    'Email' : 'janitha1717@gmail.com'
}])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
