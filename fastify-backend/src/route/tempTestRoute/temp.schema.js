const postRequestBody = {
  type: 'object',
  required: ['title'],
  properties: {
    title: {
      type: 'string',

    }
  }
}

const getResponse = {
  200: {
    type: 'object',
    required: ['temps'],
    properties: {
      temps: {
        type: 'array',
        items: {
          type: 'object',
          required: ['title', 'id'],
          properties: {
            title: {
              type: 'string',
            },
            id: {
              type: 'string'
            }
          }
        }
      }
    }
  }
}

const postResponse = {
  201: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' },
    }
  }
}

const schema = {
  postRequestBody,
  postResponse,
  getResponse
}

module.exports = schema