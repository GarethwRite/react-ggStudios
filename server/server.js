const path = require('path')
const express = require('express')
const server = express()

const twitter = require('./routes/twitter')
const userRoutes = require('./routes/users')


server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/users', userRoutes)
server.use('/api/twitter', twitter)

module.exports = server
