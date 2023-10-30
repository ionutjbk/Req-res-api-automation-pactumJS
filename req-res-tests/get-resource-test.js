const { spec, request } = require('pactum');
const baseUrl = 'https://reqres.in/api'

describe('GET resources suite', () => {

    before( async () => {
        request.setDefaultTimeout(10000)
    });

    it('Get list resource', async () => {
        await spec().get(baseUrl + '/unknown')
        .expectStatus(200)
    });

    it('Get single resource', async () => {  
        await spec().get(baseUrl + '/unknown/3')
        .expectStatus(200)
        .expectJsonMatch({
            "data": {
                "id": 3,
                "name": "true red",
                "year": 2002,
                "color": "#BF1932",
                "pantone_value": "19-1664"
            },
            "support": {
                "url": "https://reqres.in/#support-heading",
                "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
            }
        })          
    });

    it('Get single resource not found', async () => {  
        await spec().get(baseUrl + '/unknown/200')
        .expectStatus(404)              
    });

});