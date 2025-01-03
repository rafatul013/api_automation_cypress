const envVariable = require('../fixtures/envVariable.json');
const login = require('../fixtures/login.json')

describe("Login", () => {
    var BaseUrl = envVariable.BaseUrl;
    var Username = login.username;
    var Password = login.password;

    it("Login with valid credential", () => {
        cy.request({
            method: 'POST',
            url: BaseUrl + 'auth',
            body: {
                "username": Username,
                "password": Password
            }
        }).then((response)=>{
            expect(response.status).eq(200);
            cy.log(JSON.stringify(response.body));

            var token = response.body.token; 
            envVariable.token = token; // Updated property with consistent name
            cy.writeFile('cypress/fixtures/envVariable.json', JSON.stringify(envVariable)); 
        })
    })
})