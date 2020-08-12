const express = require('express')
const findCity = require('./cityLookUp')
const findCitiesByName = require('./cityLookUpByPop')
const server = express()
const port = 3000
// server.get('/', (req, res) => res.send('Hello World!'))
// server.listen(port, () => console.log(`Example app listening on port ${port}!`))

// console.log(server)

server.get('/',function(request,response){
    console.log('home route' )
    return response.send('hello')
})

server.get('/about',function(request,response){
    console.log('about route')
    return response.send('hello aus')
})


server.listen(port,function(){
    console.log('server lauched at http://localhost' + port)
})


// server.get('/data',function(request,response){
//       var data = {
//           name = 'austin'
//       }
//       return response.json(data)

// })

server.get('/find-city',function(request,response){
    var q = request.query
    var data = findCity(q.city)
    return response.json(data)
})

server.get('/qs',function(req,res){
     var query = req.query
     return res.json(query)

})

server.get('/test',function(req,res){
   var query = req.query.population
   return res.json(findCitiesByP(query))

})


const express = require('express')
const findCity = require('./cityLookUp')
const findCitiesByName = require('./cityLookUpByPop')
const server = express()
const port = 3000
// server.get('/', (req, res) => res.send('Hello World!'))
// server.listen(port, () => console.log(`Example app listening on port ${port}!`))

// console.log(server)

server.get('/',function(request,response){
    console.log('home route' )
    return response.send('hello')
})

server.get('/about',function(request,response){
    console.log('about route')
    return response.send('hello aus')
})


server.listen(port,function(){
    console.log('server lauched at http://localhost' + port)
})


// server.get('/data',function(request,response){
//       var data = {
//           name = 'austin'
//       }
//       return response.json(data)

// })

// server.get('/find-city',function