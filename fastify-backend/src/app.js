const fastify = require('fastify');
const db = require('./plugin/database')
const testRoute = require('./route/tempTestRoute')
const swaggerPlugin = require('./plugin/swagger')

const build = (opts = {}) => {
  const app = fastify(opts);

  // register plugins
  app.register(db);
  app.register(swaggerPlugin);

  // register route
  app.register(testRoute, { prefix: 'api/v1/test'})

  app.get('/', async (request, reply) => {
    reply.code(200).send({
      hello: 'world',
    });
  });

  app.ready()
  app.swagger()
  return app;
};

module.exports = build;
