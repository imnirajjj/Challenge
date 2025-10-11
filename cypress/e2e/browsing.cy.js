Cypress.on('uncaught:exception', (err, runnable) => {
    console.warn('⚠️ Ignored uncaught exception:', err.message);
    return false; // prevents Cypress from failing the test
});

import BrowsingPage from "../pages/browsingPage";

describe("Dashboard Tests", () => {
    let dashboard;

    // Reuse login session for all tests
    before(() => {
        cy.loginWithFixture(); 
        console.log("✅ Logged in using fixture");
        dashboard = new BrowsingPage();
    });

    it("Product Browsing & Filtering", () => {
        dashboard.clickProduct();
        dashboard.expandWomenPanel();
        dashboard.clickDress();
        dashboard.verifyFilteredProducts("Dress");
        dashboard.clickFirstProduct();
        dashboard.verifyProductDetails("Dress");
    });

    it.only("Cart and Quantity Management", () => {
        dashboard.clickProduct();
        dashboard.addItem();
        dashboard.addItemTwo();
        dashboard.addItemThree();
        dashboard.clickFirstProduct();
        dashboard.fillQuantity('3');
        

    });
});
