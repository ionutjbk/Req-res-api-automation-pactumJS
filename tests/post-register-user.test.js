const { spec, request } = require('pactum');

const baseUrl = 'https://reqres.in/api'

describe('POST register requests', () => {
    before( async () => {
        request.setDefaultTimeout(10000)
    });

    it('Registering user with valid credentials', async () => {
        const requestBody = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }

        await spec().post(baseUrl + '/register')
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(200)
    });

    it('Trying to register user with invalid e-mail', async () => {
        const requestBody = {
            "email": "@reqres.in",
            "password": "pistol"
        }

        await spec().post(baseUrl + '/register')
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(400)
    });
});