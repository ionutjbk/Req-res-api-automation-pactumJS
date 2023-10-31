const { spec, request } = require('pactum');

const baseUrl = 'https://reqres.in/api'

describe('POST login user suite', () => {
    before( async () => {
        request.setDefaultTimeout(10000)
    });

    it('Login user with valid credentials', async () => {
        const requestBody = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }

        await spec().post(baseUrl + '/login')
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(200)
    });

    it('Login user without password', async () => {
        const requestBody = {
            "email": "eve.holt@reqres.in",
            "password": ""
        }

        await spec().post(baseUrl + '/login')
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(400)
    });
});