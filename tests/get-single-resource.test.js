const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');
const { string, any } = require('pactum-matchers');

const baseUrl = 'https://reqres.in/api'

describe('GET single resource suite', () => {
    before( async () => {
        request.setDefaultTimeout(10000)
    });

    it('Get single resource', async () => {  
        const userId = faker.number.int({ min: 1, max: 10 })

        await spec().get(baseUrl + `/unknown/${userId}`)
        .expectStatus(200)
        .expectJsonMatch({
            "data": {
                "id": userId,
                "name": string(),
                "year": any(2),
                "color": any('string'),
            }         
        })          
    });

    it('Get single resource not found', async () => {  
        await spec().get(baseUrl + '/unknown/200')
        .expectStatus(404)              
    });
});