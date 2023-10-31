const { spec, request } = require('pactum');

const baseUrl = 'https://reqres.in/api'

describe('GET single user suite', () => {
    before( async () => {
        request.setDefaultTimeout(10000)
    });

    it('Get single user', async () => {
        await spec().get(baseUrl + '/users/5')
        .expectStatus(200)
        
    });

    it('Single user not found', async () => {
        await spec().get(baseUrl + '/users/5000000')
        .expectStatus(404)
    });
});