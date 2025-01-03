
const { defineConfig } = require("cypress");

module.exports = defineConfig({
    watchForFileChanges: false,

  e2e: {
    setupNodeEvents(on, config) {
      config.specPattern = [
        'cypress\e2e\TestSuite\TestSuite.cy.js',
        'cypress\e2e\createbooking.cy.js',
        'cypress\e2e\createbooking.cy.js',
        'cypress\e2e\login.cy.js',
        'cypress\e2e\Updatebooking.cy.js',
        'cypress\e2e\deletebooking.cy.js'
      ]
    },
  },
});
