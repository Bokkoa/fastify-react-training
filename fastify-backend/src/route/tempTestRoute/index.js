const tempService = require('../../service/temp.service')
const { postRequestBody, postResponse, getResponse } = require('./temp.schema')

const route = async (fastify) => {
  
  const { getAll, save } = tempService(fastify);
  // get route
  fastify.get('/', { schema: { resposne: getResponse } }, async (request, reply) => {
  
    const allTest = await getAll();
    reply.code(200).send({
      temps: allTest
    })

  });

  // post route
  fastify.post('/', { schema: { body: postRequestBody, response: postResponse } }, async (request, reply) => {

    fastify.log.info(`Request with body ${request}`)
    const { title } = request.body

    const id = save(title) 

    reply.code(201).send(id)
  })
}

module.exports = route;