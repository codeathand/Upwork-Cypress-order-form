/// <reference types="cypress" />
import { formPage } from '../page_object/form.page'
import { NAMES } from '../fixtures/constants'
import { FORMDATA } from '../fixtures/constants'
import { validateEmail } from '../utils/'

describe('Order Form', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('up-1 : Form layout', () => {
        formPage.heading.contains('Your Details:').should('be.visible')
        formPage.first_name.should('have.attr', 'placeholder', NAMES.FIRSTNAME).should('be.visible')
        formPage.last_name.should('have.attr', 'placeholder', NAMES.LASTNAME).should('be.visible')
        formPage.email.should('have.attr', 'placeholder', NAMES.EMAIL).should('be.visible')
        formPage.phone.should('have.attr', 'placeholder', NAMES.PHONE).should('be.visible')

        formPage.heading.contains('Contact Address:').should('be.visible')
        formPage.street.should('have.attr', 'placeholder', NAMES.STREET).should('be.visible')
        formPage.city.should('have.attr', 'placeholder', NAMES.CITY).should('be.visible')
        formPage.zip.should('have.attr', 'placeholder', NAMES.ZIP).should('be.visible')
        formPage.country.should('be.visible')
        formPage.country.invoke('val').then(co => {
            assert.equal(co, '', 'Default value is empty')
        })
        formPage.default_option_country.contains('Country - Please Select').should('be.visible')
        formPage.state.should('be.visible')
        formPage.country.invoke('val').then(st => {
            assert.equal(st, '', 'Default value is empty')
        })
        formPage.default_option_state.contains('State - Please Select').should('be.visible')

        formPage.heading.contains('Card Details:').should('be.visible')
        formPage.cardname.should('have.attr', 'placeholder', NAMES.CARDNAME).should('be.visible')
        formPage.cardnumber.should('have.attr', 'placeholder', NAMES.CARDNUMBER).should('be.visible')
        formPage.visa_mastercard.should('have.attr', 'src', '/JsCssImg/images/visa-master.png')
        formPage.expiration_month.should('have.attr', 'placeholder', NAMES.EX_MONTH).should('be.visible')
        formPage.expiration_year.should('have.attr', 'placeholder', NAMES.EX_YEAR).should('be.visible')
        formPage.cvv.should('have.attr', 'placeholder', NAMES.CVV).should('be.visible')
        formPage.cvv_img.should('have.attr', 'src', '/JsCssImg/images/cvv.png')

        formPage.checkbox.should('be.visible')

        formPage.submit.contains('Click Here To Continue').should('be.visible')
    })

    it('up-2 : Fill form', () => {
        formPage.first_name.type(FORMDATA.FIRSTNAME)
        formPage.first_name_label.contains(NAMES.FIRSTNAME).should('be.visible')
        formPage.first_name.blur()
        formPage.check_green.eq(0).should('be.visible')

        formPage.last_name.type(FORMDATA.LASTNAME)
        formPage.last_name_label.contains(NAMES.LASTNAME).should('be.visible')
        formPage.last_name.blur()
        formPage.check_green.eq(1).should('be.visible')

        formPage.message.invoke('text').then(txt => {
            assert(txt, `Hello ${FORMDATA.FIRSTNAME}, To complete this process, I need a few more details. We value your privacy.`, 'Text is displayed after first and last name has been entered')
        })

        formPage.email.type(FORMDATA.EMAIL).invoke('val').then(em => {
            assert.equal(validateEmail(em), true, 'E-mail is in valid format')
        })

        formPage.phone.type(FORMDATA.PHONE)
        formPage.phone_label.contains(NAMES.PHONE).should('be.visible')
        formPage.phone.blur()

        formPage.street.type(FORMDATA.STREET)
        formPage.street_label.contains(NAMES.STREET).should('be.visible')
        formPage.street.blur()
        formPage.check_green.eq(2).should('be.visible')
        formPage.check_green.eq(3).should('be.visible')

        formPage.city.type(FORMDATA.CITY)
        formPage.city_label.contains(NAMES.CITY).should('be.visible')
        formPage.city.blur()
        formPage.check_green.eq(4).should('be.visible')

        formPage.zip.type(FORMDATA.ZIP)
        formPage.zip_label.contains(NAMES.ZIP).should('be.visible')
        formPage.zip.blur()
        formPage.check_green.eq(5).should('be.visible')

        formPage.country.select('Yugoslavia').then(val => {
            assert(val, 'YU', 'Correct country is select')
            formPage.country_label.contains(NAMES.COUNTRY).should('be.visible')
            formPage.state_label.contains(NAMES.STATE).should('be.visible')
        })

        formPage.state2.invoke('val').then(st => {
            assert.equal(st, 'Non-US', 'Option value is correct')
            cy.log(st)
        })

        formPage.state2.invoke('text').then(st => {
            assert.include(st, 'Outside United States and Canada', 'Option text is correct')
            cy.log(st)
        })

        formPage.check_green.eq(6).should('be.visible')
        formPage.check_green.eq(7).should('be.visible')

        formPage.cardname.type(FORMDATA.CARD_NAME)
        formPage.cardname_label.contains(NAMES.CARDNAME).should('be.visible')
        formPage.cardname.blur()
        formPage.check_green.eq(8).should('be.visible')

        formPage.cardnumber.type(FORMDATA.CARD_NUMBER)
        formPage.cardnumber.blur()

        formPage.expiration_month.type(FORMDATA.EX_MONTH)
        formPage.expiration_label.contains(NAMES.EXPIRATION).should('be.visible')
        formPage.expiration_month.blur()

        formPage.expiration_year.type(FORMDATA.EX_YEAR)
        formPage.expiration_year.blur()

        formPage.cvv.type(FORMDATA.CVV)
        formPage.cvv_label.contains(NAMES.CVV).should('be.visible')
        formPage.cvv.blur()
        formPage.check_green.eq(9).should('be.visible')

        formPage.checkbox.check()
        formPage.check_green.eq(10).should('be.visible')

    })

})