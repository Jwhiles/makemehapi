const hapi = require('hapi');
const vision = require('vision');
const handlebars = require('handlebars')

let server = new hapi.Server();


server.connection({
  host: 'localhost',
  port: (process.argv[2] || 8080)
})

server.register(vision, (err) => {
  if (err) { throw err }
})

server.views({
  engines: {
    html: handlebars
  },
  path: __dirname + '/templates',
  helpersPath: __dirname + '/helpers'

})

server.route({
  path: '/',
  method: 'GET',
  handler: {
    view: '7template.html',
  }
})

server.start(() => {
  console.log(`server is running on ${server.info.uri}`)
})
