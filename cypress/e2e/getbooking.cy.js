const envVariable = require('../fixtures/envVariable.json')
describe("Get the Boking", ()=>{
    var BaseUrl = envVariable.BaseUrl
    var BookingID = envVariable.bookingid
    it("Get Individul Booking",()=>{
        cy.request({
            method: 'GET',
            url: BaseUrl + 'booking/' +BookingID
        }).then((response)=>{
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));
           // expect(response.body.bookingid).eq(BookingID);
        })
    })
})