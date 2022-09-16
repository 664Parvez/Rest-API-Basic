const express = require('express')
const app = express()

const employeeRouter = require('./router/user.router')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>')
})

app.use(employeeRouter)

app.use((req, res) => {
    res.status(404).send('<h1>404, The page is not found</h1>')
})

module.exports = app