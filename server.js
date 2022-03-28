const express = require('express')
const initDB = require('./config/db')

const bodyParse=require('body-parser')
const cors = require('cors')
const app = express()

const port = 5500

const userRouter = require('./app/routes/color')


app.use(
    bodyParse.json({
        limit:'20mb'
    }),cors()
)

app.use(
    bodyParse.urlencoded({
        limit:'20mb',
        extended:true
    })
)

app.use(userRouter)


/*
*si se cambia puerto aquí, cambiar también en controller/colors.js
*metodo NextPage,PrevPage
*/
app.listen(port, () => { 
    console.log(`Server is listening at http://localhost:${port}`)
})

initDB()