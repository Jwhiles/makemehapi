const hapi = require('hapi');
let server = new hapi.Server()

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.route({
  path: '/{name}',
  method: 'GET',
  handler: (req, rep) => {
    rep(`Hello ${encodeURIComponent(req.params.name)}`)
  }
})

server.start(() => {
  console.log(`server running at ${server.info.uri}`)

});
