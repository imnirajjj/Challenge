class SignUpPage{
    url = 'https://automationexercise.com/';
    clickBtn = '//a[@href="/login"]';
    inputName = '//input[@data-qa="signup-name"]';
    inputEmail = '//input[@data-qa="signup-email"]';
    radioBtn = '//input[@id="id_gender1"]';
    submitBtn = '//button[@data-qa="signup-button"]';
    inputPassword = '//input[@data-qa="password"]'
    inputDays = '//select[@data-qa="days"]'
    inputMonth = '//select[@data-qa="months"]'
    inputYear = '//select[@data-qa="years"]'
    inputFirstName = '//input[@data-qa="first_name"]'
    inputLastName = '//input[@data-qa="last_name"]'
    inputAddress = '//input[@data-qa="address"]'
    inputCountry = '//select[@data-qa="country"]'
    inputState = '//input[@data-qa="state"]'
    inputCity = '//input[@data-qa="city"]'
    inputZipCode = '//input[@data-qa="zipcode"]'
    inputMobileNumber = '//input[@data-qa="mobile_number"]'

    visit(){
        cy.visit(this.url);
    }

    clickSignup(){
        cy.xpath(this.clickBtn).click();
    }

    fillName(name){
        cy.xpath(this.inputName).type(name);
    }

    fillEmail(email){
        cy.xpath(this.inputEmail).type(email);
    }

    submit(){
        cy.xpath(this.submitBtn).click();
    }

    clickRadio(){
        cy.xpath(this.radioBtn).click();
    }

    fillPassword(password){
        cy.xpath(this.inputPassword).type(password);
    }

    fillDays(Days){
        cy.xpath(this.inputDays).select(Days);
    }

    fillMonth(Month){
        cy.xpath(this.inputMonth).select(Month);
    }

    fillYear(Year){
        cy.xpath(this.inputYear).select(Year);
    }

    fillFirstName(firstname){
        cy.xpath(this.inputFirstName).type(firstname);
    }

    fillLastName(lastname){
        cy.xpath(this.inputLastName).type(lastname);
    }

    fillAddress(Address){
        cy.xpath(this.inputAddress).type(Address);
    }

    fillCountry(country){
        cy.xpath(this.inputCountry).type(country);
    }

    fillState(State){
        cy.xpath(this.inputState).type(State);
    }

    fillCity(City){
        cy.xpath(this.inputCity).type(City);
    }

    fillZipCode(ZipCode){
        cy.xpath(this.inputZipCode).type(ZipCode);
    }

    fillMobileNumber(number){
        cy.xpath(this.inputMobileNumber).type(number);
    }








}

export default SignUpPage;