const { spec, request } = require('pactum');

const baseUrl = 'https://reqres.in/api'

describe('Delete users suite', () => {
    before( async () => {
        request.setDefaultTimeout(10000)
    });

    it('Delete user', async () => {
        await spec().delete(baseUrl + "/user/2")
        .expectStatus(204)
    });
});