const { spec, request } = require('pactum');
const baseUrl = 'https://reqres.in/api'

describe('POST register requests', () => {

    it('Register user succesfull', async () => {
        const requestBody = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }

        await spec().post(baseUrl + '/register')
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(200)
    });

    it('Register user unsuccesfull', async () => {
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