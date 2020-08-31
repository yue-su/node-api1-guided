const express = require('express')

const server = express()

server.use(express.json())  //invoke the function, needed for POST and PUT for reading json

const hubs = [
    {
        id: 1,
        name: 'node33 api',
        lessonId: 1,
        cohort: 'node 33',
    },
    {
        id: 2,
        name: 'node33 api',
        lessonId: 1,
        cohort: 'node 33',
    }
]

server.get('/', (req, res) => {
    res.status(200).json({hello: 'Node 33'})
})

//list hubs
server.get('/hubs', (req, res) => {
    res.status(200).json({data:hubs})
})

server.post('/hubs', (req, res) => {
    const hub = req.body
    hubs.push(hub)
    res.status(201).json({data: hubs})
})

server.delete('/hubs/:id', (req, res) => {
    const id = Number(req.params.id)
    
    const hubs = hubs.filter(hub => hub.id !== id)  //change the original data array

    res.status(200).json(hubs)
})





const port = 8000
server.listen(port, ()=> console.log('server up...'))