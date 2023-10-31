const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');
const { string, any } = require('pactum-matchers');

const baseUrl = 'https://reqres.in/api'

describe('GET resources suite', () => {
    before( async () => {
        request.setDefaultTimeout(10000)
    });

    it('Get list of resources', async () => {
        await spec().get(baseUrl + '/unknown')
        .expectStatus(200)
    });
});