const express = require('express')
const cities = require('all-the-cities')
const server = express()
const port = 3300


// server.get('/', (req, res) => res.send('Hello World!'))
 
server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


server.get('/',function(request,response){
        console.log('home route' )
        return response.send('hello')
    })
    
    server.get('/about',function(request,response){
        console.log('about route')
        return response.send('hello world')
    })
    
  