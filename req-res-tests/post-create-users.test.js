const { spec, request } = require('pactum');
const { notNull } = require('pactum-matchers');
const { faker } = require('@faker-js/faker');

const baseUrl = 'https://reqres.in/api'

describe('POST create new users', () => {
    it('Create user ', async () => {
        const randomName = faker.person.fullName();
        const randomJob = faker.person.jobTitle()
        

        const requestBody = {
            "name": randomName, // Molly Yundt DDS
            "job": randomJob // Human Communications Supervisor
        }

        await spec().post(baseUrl + '/users')
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(201)
        .inspect()
        .expectJsonLike({
            "name": randomName,
            "job": randomJob,
          })
    });
});