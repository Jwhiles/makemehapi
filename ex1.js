const hapi = require('hapi');
const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
})

server.route({
  path: '/',
  method: 'GET',
  handler: (req, rep) => {
    rep('Hello hapi');
  }
});

server.start(() => {
  console.log(`server running at ${server.info.uri}`)
})
