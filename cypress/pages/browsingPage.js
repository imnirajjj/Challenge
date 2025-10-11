class BrowsingPage {
    // Selectors
    findProduct = "//a[text()=' Products']";
    womenPanel = "//a[@href='#Women']";
    dressLink = "(//a[text()='Dress '])[1]";
    productList = ".features_items .product-image-wrapper";
    productName = ".product-information h2";
    productPrice = ".product-information span > span";
    productAvailability = ".product-information p:contains('Availability')";
    firstProduct = '//a[@data-product-id="7"]';
    secondProduct = '//a[@data-product-id="2"]';
    thirdProduct = '//a[@data-product-id="5"]';
    inputQuantity = '//input[@id="quantity"]';
    addedModalTitle = "//h4[contains(text(),'Added!')]";
    continueShoppingBtn = "//button[text()='Continue Shopping']";
    lastCheckOut = '//button[@class="btn btn-default cart"]';
    viewCart = "//u[text()='View Cart']";

    // Navigate to Products page
    clickProduct() {
        cy.xpath(this.findProduct).click();
        console.log("🛍️ Navigated to Products page");
    }

    // Expand Women category panel
    expandWomenPanel() {
        cy.xpath(this.womenPanel).click();
        console.log("👗 Expanded Women category panel");
    }

    // Click Dress category
    clickDress() {
        cy.xpath(this.dressLink, { timeout: 10000 })
          .should('be.visible')
          .click();
        console.log("💃 Clicked on Dress category");
    }

    // Verify filtered products contain keyword
    verifyFilteredProducts(keyword) {
        cy.get(this.productList)
          .its('length')
          .should('be.gt', 0)
          .each(($el, index) => {
              cy.wrap($el)
                .find('.productinfo p')
                .invoke('text')
                .then((text) => {
                    expect(text.trim().toLowerCase()).to.include(keyword.toLowerCase());
                    console.log(`✅ Product ${index + 1}: ${text.trim()}`);
                });
          });
    }

    // Click first product’s "View Product"
    clickFirstProduct() {
        cy.get(this.productList)
          .first()
          .find("a")
          .contains("View Product")
          .click();
        console.log("👁️ Clicked on first product's View Product link");
    }

    // Verify product details
    verifyProductDetails(expectedNameKeyword) {
        cy.get(this.productName).should('contain.text', expectedNameKeyword)
          .then(($el) => console.log(`✅ Product Name Verified: ${$el.text()}`));

        cy.get(this.productPrice).should('exist')
          .then(($el) => console.log(`💲 Product Price Verified: ${$el.text()}`));

        cy.get(this.productAvailability).should('exist')
          .then(($el) => console.log(`📦 Product Availability Verified: ${$el.text()}`));
    }

    // Generic method to add a product to cart
    addProduct(productSelector, itemNumber) {
        cy.xpath(productSelector)
            .scrollIntoView()
            .trigger('mouseover', { force: true })
            .find('a.add-to-cart:visible')
            .click({ force: true });
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
}

export default BrowsingPage;
