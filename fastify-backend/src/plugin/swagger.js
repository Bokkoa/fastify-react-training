const fp = require('fastify-plugin')
const swagger = require('@fastify/swagger')

module.exports = fp((fastify, options, next) => {

  fastify.register(swagger, {
    swagger: {
      info: {
        title: "fastify test",
        description: "api documentation",
        version: "0.1.0"
      },
      servers: [
        { url: "http://localhost:5000", description: "development" },
        { url: "https://<production-url>", description: "production" }
      ],
      schemes: ["http"],
      consumes: ["application/json"],
      produces: ["application/json"],
      tags: [
        {name: 'Temp', description: 'Temp related endpoints'}
      ],
      definitions: {
        Temp: {
          type: 'object',
          required: ['id', 'title'],
          properties: {
            id: { type: 'string', format: 'uuid'},
            title: { type: 'string' }
          }
        }
      },
    }
  })

  next()

})