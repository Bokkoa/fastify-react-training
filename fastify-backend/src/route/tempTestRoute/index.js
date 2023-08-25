const tempService = require('../../service/temp.service')

const route = async (fastify) => {
  
  const { getAll, save } = tempService(fastify);
  // get route
  fastify.get('/', async (request, reply) => {
  
    const allTest = await getAll();
    reply.code(200).send(allTest)

  });

  // post route
  fastify.post('/', async (request, reply) => {

    fastify.log.info(`Request with body ${request}`)
    const { title } = request.body

    const id = save(title) 

    reply.code(201).send(id)
  })
}

module.exports = route;