class CartPage {
    findProduct = "//a[text()=' Products']";
    productList = ".features_items .product-image-wrapper";
    firstProduct = '//a[@data-product-id="7"]';
    secondProduct = '//a[@data-product-id="2"]';
    thirdProduct = '//a[@data-product-id="5"]';
    inputQuantity = '//input[@id="quantity"]';
    addedModalTitle = "//h4[contains(text(),'Added!')]";
    continueShoppingBtn = "//button[text()='Continue Shopping']";
    lastCheckOut = '//button[@class="btn btn-default cart"]';
    viewCart = "//u[text()='View Cart']";
    findCart ="//a[text()=' Cart']";

    clickProduct() {
        cy.xpath(this.findProduct).click()
        .log("Navigated to Products page");
    }

    // Click first product’s "View Product"
    clickFirstProduct() {
        cy.get(this.productList)
          .first()
          .find("a")
          .contains("View Product")
          .click()
          .log("Clicked on first product's View Product link");
    }


    addItem(){
        cy.xpath(this.firstProduct)
            .first().click({ force: true });
        cy.xpath(this.addedModalTitle)
            .should('be.visible')
            .then(() => console.log('added to cart successfully'));
        cy.xpath(this.continueShoppingBtn)
            .should('be.visible')
            .click()
            .then(() => console.log('Clicked Continue Shopping after Item'));
    }

    addItemTwo(){
        cy.xpath(this.secondProduct)
            .first().click({ force: true });
        cy.xpath(this.addedModalTitle)
            .should('be.visible')
            .then(() => console.log('added to cart successfully'));
        cy.xpath(this.continueShoppingBtn)
            .should('be.visible')
            .click()
            .then(() => console.log('Clicked Continue Shopping after Item'));
    }

    addItemThree(){
        cy.xpath(this.thirdProduct)
            .first().click({ force: true });
        cy.xpath(this.addedModalTitle)
            .should('be.visible')
            .then(() => console.log('added to cart successfully'));
        cy.xpath(this.continueShoppingBtn)
            .should('be.visible')
            .click()
            .then(() => console.log('Clicked Continue Shopping after Item'));
    }

    fillQuantity(quantity){
        cy.xpath(this.inputQuantity).clear().type(quantity);
        cy.xpath(this.lastCheckOut).click();
        cy.xpath(this.viewCart).click();
    }

    // Navigate to Products page
    clickCart() {
        cy.xpath(this.findCart).click();
        console.log("🛍️ Navigated to Cart page");
    }
}

export default CartPage;
