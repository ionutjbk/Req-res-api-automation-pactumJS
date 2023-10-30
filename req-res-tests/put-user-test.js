const { spec, request } = require('pactum');
const { notNull } = require('pactum-matchers');
const { faker } = require('@faker-js/faker');
const baseUrl = 'https://reqres.in/api'

describe('PUT user suite', () => {

    before( async () => {
        request.setDefaultTimeout(10000)
    });

    it('Update user info', async () => {
        const randomName = faker.person.fullName()
        const randomJob = faker.person.jobTitle()

        const updatedInfo = {
            "name": "morpheus",
            "job": "zion resident"
        }
            
        await spec().get(baseUrl + '/users/10')
        .withHeaders('Content-Type', 'application/json')
        .withBody(updatedInfo)
        .expectJsonLike({
            "name": "morpheus",
            "job": "zion resident",
            "updatedAt": notNull()
        })
        .inspect()
        .expectStatus(200)
    });

});