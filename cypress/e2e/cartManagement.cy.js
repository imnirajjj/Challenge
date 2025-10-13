import CartPage from "../pages/cartPage";

describe("Cart and Quantity Management", () => {
    let dashboard;

    before(() => {
        cy.loginWithFixture(); 
        cy.log("Logged in using fixture");
        dashboard = new CartPage();
    });

    it("Verify if user can add product to Cart and add the Quantity", () => {
        cy.fixture('fixedData').then((data) => {
        dashboard.clickProduct();
        dashboard.addItem();
        dashboard.addItemTwo();
        dashboard.addItemThree();
        dashboard.clickFirstProduct();
        dashboard.fillQuantity(data.quantity);
    });
});
});
