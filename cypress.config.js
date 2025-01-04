
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Booking API Automation Test Report',
  },
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.specPattern = [
        //'cypress\e2e\TestSuite\TestSuite.cy.js',
        'cypress/e2e/createbooking.cy.js',
        'cypress/e2e/getbooking.cy.js',
        'cypress/e2e/login.cy.js',
        'cypress/e2e/Updatebooking.cy.js',
        'cypress/e2e/deletebooking.cy.js'
      ]
      return config;
    },
  },
});
