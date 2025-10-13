class CheckOutPage {
    findCart ="//a[text()=' Cart']";
    checkOutBtn = '//a[@class="btn btn-default check_out"]';
    placeOrder = '//a[@class="btn btn-default check_out"]';
    inputCardName = '//input[@data-qa="name-on-card"]';
    inputCardNumber = '//input[@data-qa="card-number"]';
    inputCVC = '//input[@data-qa="cvc"]';
    inputExpiryMonth = '//input[@data-qa="expiry-month"]';
    inputExpiryYear = '//input[@data-qa="expiry-year"]';
    confirmBtn = '//button[@data-qa="pay-button"]'
    confirmMsg = "//p[text()='Congratulations! Your order has been confirmed!']";

    // Navigate to Products page
    clickCart() {
        cy.xpath(this.findCart).click()
        .log("Navigated to Cart page");
    }

    clickCheckOut(){
        cy.xpath(this.checkOutBtn).click();
        cy.xpath(this.placeOrder).click();    
    }

    paymentConfirmation(name, cardNumber, cvc, month, year) {
        cy.xpath(this.inputCardName).should('be.visible').type(name);
        cy.xpath(this.inputCardNumber).should('be.visible').type(cardNumber.toString());
        cy.xpath(this.inputCVC).should('be.visible').type(cvc.toString());
        cy.xpath(this.inputExpiryMonth).should('be.visible').type(month.toString());
        cy.xpath(this.inputExpiryYear).should('be.visible').type(year.toString());
    }

    confirmPayment(){
        cy.xpath(this.confirmBtn).click();
        cy.xpath(this.confirmMsg)
        .should('be.visible')
        .then(() => {
            cy.log('Order has been confimred Successfully');
        });
    }
}

export default CheckOutPage;