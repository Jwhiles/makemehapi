const hapi = require('hapi');
let server = new hapi.Server();
const inert = require('inert')

server.connection({
  host: 'localhost',
  port: (process.argv[2] || 8080)
})

server.register(inert, (err) => {
  if (err) { throw err }
  server.route({
    path: '/',
    method: 'GET',
    handler: {
      file: "index.html"
    }
  })
})

server.start(() => {
  console.log('server running at: ', server.info.uri)
})
