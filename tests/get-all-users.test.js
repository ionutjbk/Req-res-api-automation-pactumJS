const { spec, request } = require('pactum');

const baseUrl = 'https://reqres.in/api'
const getAllUsersSchema = require('../data/response/get-users-schema.json')

describe('GET all users suite', () => {
    before( async () => {
        request.setDefaultTimeout(10000)
    });

    it('Get all users', async () => {
        await spec().get(baseUrl + '/users?page=2')
        .expectStatus(200)
        .expectJsonSchema(getAllUsersSchema)
    });
});