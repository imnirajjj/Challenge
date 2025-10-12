import CartPage from "../pages/cartPage";

describe("Dashboard Tests", () => {
    let dashboard;

    // Reuse login session for all tests
    before(() => {
        cy.loginWithFixture(); 
        console.log("✅ Logged in using fixture");
        dashboard = new CartPage();
    });


    it("Cart and Quantity Management", () => {
        dashboard.clickProduct();
        dashboard.addItem();
        dashboard.addItemTwo();
        dashboard.addItemThree();
        dashboard.clickFirstProduct();
        dashboard.fillQuantity('3');
    });
});

