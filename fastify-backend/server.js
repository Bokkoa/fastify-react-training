// add .env variables
require('dotenv').config()

const PORT = process.env.PORT || 5000;

const builder = require('./src/app');

const server = builder({
  logger: {
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
  },
});

const start = async () => {
  try {
    await server.listen({
      port: PORT, 
      host: '0.0.0.0'
    });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
