import http from "node:http"
// we are creating this server to the UI can communicate with the db


// createServer takes a callback as a param because its asycronous
// request is the incoming request object (who is asking)
// response is object we can use to respond to the request (how we reply)
const server = http.createServer((request, response) => {
    // console.log(request);
    response.statusCode = 200;
    // 200 and 300 are good
    // 400's the user sent a bad request
    // 500 server is messing up
    response.setHeader("Content-Type", "text/plain") // text/json //data/json 
    // Mime Type/Content Type is like a file type for the internet
    response.end("Hello Ginger")
})
const port = 4000;
server.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})

