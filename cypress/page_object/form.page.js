export default class FormPage {

    get heading() {
        return cy.get('h4')
    }

    get first_name() {
        return cy.get('#first-name')
    }

    get first_name_label() {
        return cy.get('#first-name-top-levels')
    }

    get last_name() {
        return cy.get('#last-name')
    }

    get last_name_label() {
        return cy.get('#last-name-top-levels')
    }

    get message() {
        return cy.get('.msz_box')
    }

    get email() {
        return cy.get('#emailaa')
    }

    get phone() {
        return cy.get('#phone')
    }

    get phone_label() {
        return cy.get('#phone-top-levels')
    }

    get street() {
        return cy.get('#street')
    }

    get street_label() {
        return cy.get('#street-top-levels')
    }

    get city() {
        return cy.get('#city')
    }

    get city_label() {
        return cy.get('#city-top-levels')
    }

    get zip() {
        return cy.get('#zip')
    }

    get zip_label() {
        return cy.get('#zip-top-levels')
    }

    get country() {
        return cy.get('#select-country')
    }

    get country_label() {
        return cy.get('#select-country-top-levels')
    }

    get default_option_country() {
        return cy.get('#disable_country')
    }

    get state() {
        return cy.get('#select-state')
    }

    get state_label() {
        return cy.get('#select-state-top-levels')
    }

    get state2() {
        return cy.get('#select-state2')
    }

    get default_option_state() {
        return cy.get('#disable_state')
    }

    get cardname() {
        return cy.get('#cardname')
    }

    get cardname_label() {
        return cy.get('#cardname-top-levels')
    }

    get cardnumber() {
        return cy.get('#cardno')
    }

    get visa_mastercard() {
        return cy.get('img.visa_mastercard')
    }

    get expiration_month() {
        return cy.get('#ex_month')
    }

    get expiration_label() {
        return cy.get('#ex_month-top-levels')
    }

    get expiration_year() {
        return cy.get('#ex_year')
    }

    get cvv() {
        return cy.get('#cvv')
    }

    get cvv_label() {
        return cy.get('#cvv-top-levels')
    }

    get cvv_img() {
        return cy.get('img.cvv-img')
    }

    get checkbox() {
        return cy.get('#checkbox_tik')
    }

    get submit() {
        return cy.get('[type="submit"]')
    }

    get check_green() {
        return cy.get('.fa-check')
    }

}

export const formPage = new FormPage()