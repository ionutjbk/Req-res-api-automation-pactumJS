const { spec, request } = require('pactum');
const baseUrl = 'https://reqres.in/api'

describe('POST login requests', () => {

    it('Login user successful', async () => {
        const requestBody = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }

        await spec().post(baseUrl + '/login')
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(200)
    });

    it('Login user unsuccessful', async () => {
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