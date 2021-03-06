const hapi = require('hapi');
const h2o2 = require('h2o2');
let server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: (process.argv[2] || 8080)
})

server.register(h2o2, (err) => {
  if (err) { throw err; }
})

server.route({
  path: '/proxy',
  method: 'GET',
  handler: {
    proxy: {
      host: '127.0.0.1',
      port: '65535',
      protocol: 'http'
    }
  }
})

server.start(() => {
  console.log(`server is running on ${server.info.uri}`)
})
