const build = require('../../src/app')

let app;
describe('Root router', () => { 

  
  beforeEach(() => {
    app = build();
  })


  afterEach(() => {
    app.close()
  })


  it('should return 200 when root route called', async () => {
    // arrange
    const expected = {
      status: 200,
      body: {
        hello: 'world'
      }
    }

    // act
    const response = await app.inject({
      url: '/'
    })

    // assert
    expect(response.statusCode).toBe(expected.status)
    expect(response.json()).toEqual(expected.body)
  })

})