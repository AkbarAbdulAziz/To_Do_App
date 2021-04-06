const express = require('express')
const app = express()
const PORT = 7000

app.set('view engine', 'pug')

//http://localhost:7000
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(PORT, (errr) => {
    if (err) throw err 

    console.log('This app is running on port ${ PORT }')
})