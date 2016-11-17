const hapi = require('hapi');
const inert = require('inert');
let server = new hapi.Server();
// const path = require('path')

server.connection({
  host: 'localhost',
  port: (process.argv[2] || 8080)
});

server.register(inert, (err) => {
  if (err) { throw err }
  server.route({
    path: '/foo/bar/baz/{f}',
    method: 'GET',
    handler: {
      directory: {
        path: 'public'
      }
    }
  })
})

server.start(() => {
  console.log(`server running on ${server.info.uri}`)
})
