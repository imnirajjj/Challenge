const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
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
