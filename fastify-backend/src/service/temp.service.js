const dao = require('../dao/temp.dao')

const tempService = (fastify) => {

  const tempDao = dao(fastify);
  const getAll = async () => {
    const allTest = await tempDao.getAll();
    return allTest
  };

  const save = async(title) => {
    const id = await tempDao.save(title)

    return id
  }


  return { getAll, save }
}

module.exports = tempService