import envVariable from '../fixtures/envVariable.json';

const { BaseUrl, token, bookingid } = envVariable;

describe("Test Update",()=>{

    it("Update Booking",()=>{
        cy.request({
            method: 'PUT',
            url:BaseUrl +'booking/' + bookingid,
            headers: {
                 'Cookie': `token=${token}`, // Include token  in the Cookie header
                //'Content-Type': 'application/json'
            },
            body:{
                "firstname" : "Rafatul Islam",
                "lastname" : "Rafat",
                "totalprice" : 100000,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "Breakfast"
            }
        }).then((response)=>{
            expect(response.status).eq(200);
            cy.log(JSON.stringify(response.body));
        })
    })
})