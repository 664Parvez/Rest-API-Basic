require('dotenv').config()
const mongoose = require('mongoose')
const DB_PORT = process.env.DB_PORT

mongoose.connect(DB_PORT).then (() => {
    console.log("Database is connected");
}).catch ((err) => {
    console.log("Database connection failed");
})