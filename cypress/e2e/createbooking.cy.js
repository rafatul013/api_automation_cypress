const envVariable = require('../fixtures/envVariable.json')

import { faker } from '@faker-js/faker';

describe("Create Booking", () => {
    const randomFirstName = faker.name.firstName();
    const randomLastName = faker.name.lastName();
    const randomCheckinDate = faker.date.future();

    it("Create New Booking Request", () => {
        cy.request({
            method: 'POST',
            url: envVariable.BaseUrl + 'booking',
            body: {
                "firstname": randomFirstName,
                "lastname": randomLastName,
                "totalprice": 1000,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": randomCheckinDate,
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));
            
            var bookingId = response.body.bookingid; 
            envVariable.bookingid = bookingId; // Updated property with consistent name
            cy.writeFile('cypress/fixtures/envVariable.json', JSON.stringify(envVariable)); 
        });
    });
});
