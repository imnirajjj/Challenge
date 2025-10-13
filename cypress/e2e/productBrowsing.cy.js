import BrowsingPage from "../pages/productBrowsingPage";

describe("roduct Browsing & Filtering", () => {
    let dashboard;

    // Reuse login session for all tests
    before(() => {
        cy.loginWithFixture(); 
        cy.log("Logged in using fixture");
        dashboard = new BrowsingPage();
    });

    it("Verify if user can browse product Browsing & Filter it", () => {
        dashboard.clickProduct();
        dashboard.expandWomenPanel();
        dashboard.clickDress();
        // dashboard.verifyFilteredProducts("Dress");
        dashboard.clickFirstProduct();
        dashboard.verifyProductDetails("Dress");
    });
});

