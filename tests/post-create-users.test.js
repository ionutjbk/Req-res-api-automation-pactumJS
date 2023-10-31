const { spec, request } = require('pactum');
const { notNull } = require('pactum-matchers');
const { faker } = require('@faker-js/faker');

const baseUrl = 'https://reqres.in/api'

describe('POST create new user suite', () => {
    before( async () => {
        request.setDefaultTimeout(10000)
    });
    
    it('Create user ', async () => {
        const randomName = faker.person.fullName();
        const randomJob = faker.person.jobTitle()
        const requestBody = {
            "name": randomName, 
            "job": randomJob 
        }

        await spec().post(baseUrl + '/users')
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(201)
        .expectJsonLike({
            "name": randomName,
            "job": randomJob,
          })
    });
});