import envVariable from '../fixtures/envVariable.json';

const { BaseUrl, token, bookingid } = envVariable;

describe("Delete Booking", ()=>{
    it("Check the delete api",()=>{
        cy.request({
            method: 'DELETE',
            url: BaseUrl +'booking/'+ bookingid,
            headers: {
                'Cookie': `token=${token}`, // Include token in the Cookie header
           },
        }).then((response)=>{
            expect(response.status).eq(201);
            cy.log(JSON.stringify(response.body));
        })
    })
})