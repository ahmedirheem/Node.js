const http = require('http')

let server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Hello To Our Home Page')
    }
    if(req.url === '/srvice'){
        res.end('Hello To Our Service Page')
    }
    res.end(`
    <h1>Oops!</h1>
    <h4>This page is not found</h4>
    <a href="/">Back To Home</a>
    `)
})

server.listen(5000)