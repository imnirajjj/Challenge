class BrowsingPage {
    findProduct = "//a[text()=' Products']";
    womenPanel = "//a[@href='#Women']";
    dressLink = "(//a[text()='Dress '])[1]";
    productList = ".features_items .product-image-wrapper";
    productName = ".product-information h2";
    productPrice = ".product-information span > span";
    productAvailability = ".product-information p:contains('Availability')";

    clickProduct() {
        cy.xpath(this.findProduct).click()
        .log("Navigated to Products page");
    }

    expandWomenPanel() {
        cy.xpath(this.womenPanel).click()
        .log("Expanded Women category panel");
    }

    // Click Dress category
    clickDress() {
        cy.xpath(this.dressLink, { timeout: 10000 })
          .should('be.visible')
          .click()
          .log("Clicked on Dress category");
    }

    // Verify filtered products contain keyword
      verifyFilteredProducts(keyword) {
          cy.get(this.productList)
            .should('have.length.greaterThan', 0)
            .each(($el, index) => {
                cy.wrap($el)
                  .find('.productinfo p')
                  .invoke('text')
                  .then((text) => {
                      expect(text.trim().toLowerCase()).to.include(keyword.toLowerCase());
                      cy.log(`Product ${index + 1}: ${text.trim()}`);
                  });
            });
      }


    // Click first product’s "View Product"
    clickFirstProduct() {
        cy.get(this.productList)
          .first()
          .find("a")
          .contains("View Product")
          .click()
          .log("Clicked on first product");
    }

    // Verify product details
    verifyProductDetails(expectedNameKeyword) {
        cy.get(this.productName).should('contain.text', expectedNameKeyword)
          .then(($el) => cy.log(`Product Name Verified: ${$el.text()}`));

        cy.get(this.productPrice).should('exist')
          .then(($el) => cy.log(`Product Price Verified: ${$el.text()}`));

        cy.get(this.productAvailability).should('exist')
          .then(($el) => cy.log(`Product Availability Verified: ${$el.text()}`));
    }
}

export default BrowsingPage;
