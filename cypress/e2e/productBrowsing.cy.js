import BrowsingPage from "../pages/productBrowsingPage";

describe("Product Browsing & Filtering", () => {
    let dashboard;

    before(() => {
        cy.loginWithFixture(); 
        cy.log("Logged in using fixture data");
        dashboard = new BrowsingPage();
    });

    it("Verify if user can browse product Browsing & Filter it", () => {
    cy.fixture('fixedData').then((data) => {
        dashboard.clickProduct();
        dashboard.expandWomenPanel();
        dashboard.clickDress();
        dashboard.verifyFilteredProducts(data.filterproduct);
        dashboard.clickFirstProduct();
        dashboard.verifyProductDetails(data.filterproduct);
    });
});
});

