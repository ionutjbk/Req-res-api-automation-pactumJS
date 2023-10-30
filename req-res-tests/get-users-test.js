const { spec, request } = require('pactum');
const baseUrl = 'https://reqres.in/api'

describe('GET users suite', () => {

    before( async () => {
        request.setDefaultTimeout(10000)
    });

    it('Get all users', async () => {
        await spec().get(baseUrl + '/users?page=2')
        .expectStatus(200)
    });

    it('Get single user', async () => {
        await spec().get(baseUrl + '/users/5')
        .expectStatus(200)
        
    });

    it('Single user not found', async () => {
        await spec().get(baseUrl + '/users/50')
        .expectStatus(404)
    });

});