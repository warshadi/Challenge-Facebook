const express = require('express')
const router = require('./config/router')
const app = express()
const port = 3000



app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

//DB
require("./config/mongoose")
//router
require('./config/router')
app.use(router)



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})