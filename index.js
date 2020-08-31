const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.status(200).json({hello: 'Node 33'})
})

const port = 8000
server.listen(port, ()=> console.log('server up...'))