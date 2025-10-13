const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config; 
    },
    specPattern: [
      'cypress/e2e/signup.cy.js',
      'cypress/e2e/productBrowsing.cy.js',
      'cypress/e2e/cartManagement.cy.js',
      'cypress/e2e/checkoutFlow.cy.js',
      'cypress/e2e/logout.cy.js'
    ],
  },
});
