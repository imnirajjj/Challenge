import BrowsingPage from "../pages/productBrowsingPage";

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
        // dashboard.verifyFilteredProducts("Dress");
        dashboard.clickFirstProduct();
        dashboard.verifyProductDetails("Dress");
    });
});

