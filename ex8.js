const hapi = require('hapi');
const fs = require('fs');
const rot13 = require('rot13-transform');
let server = new hapi.Server();
var stream = fs.createReadStream('./streamdata.txt');

server.connection({
  host: 'localhost',
  port: (process.argv[2] || 8080)
})

server.route({
  path: '/',
  method: 'GET',
  handler: function (req, reply) {
    reply(stream.pipe(rot13()))
  }
})

var stream = fs.createReadStream('./streamdata.txt');
// stream.pipe(rot13()).pipe(process.stdout)

server.start(() => {
  console.log(`The server is running on ${server.info.uri}`)
})
