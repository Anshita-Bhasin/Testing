/// <reference types="cypress"/>

/*
    In the framework module, we create a class called BasePage.
    All page object classes will extend the BasePage, thus inheriting all the base methods.
 */
    import 'cypress-file-upload';
    
    import { format } from 'date-fns';
    
    
    export class BasePage {
      /*locatorType : this should be one of these - 'class' , 'id', 'name' , 'text' , 'title'
       * attributeValue : is the value of locator
       */
      clickOnLink(locator: string) {
        try {
          cy.get(locator).then(($el): void => {
            if ($el.attr('target')) {
              cy.get(locator).first().invoke('removeAttr', 'target').click();
            } else {
              cy.get(locator).click();
            }
          });
        } catch (err) {
          cy.log(err.message);
        }
      }
    
      inputText(locator: string, text: string) {
        try {
          cy.get(locator).should('be.enabled').type(text);
        } catch (err) {
          cy.log(err.message);
        }
      }
    
      clickElement(locator: string) {
        try {
          cy.get(locator).should('be.visible').click({ force: true });
        } catch (err) {
          cy.log(err.message);
        }
      }
    
      verifyUrl(urlText: string) {
        try {
          cy.url().should('contain', urlText);
        } catch (err) {
          cy.log(err.message);
        }
      }
    
      shouldBeVisible(locator: string) {
        cy.get(locator).should('be.visible');
      }
    
      getButton(buttonName) {
        return cy.get('button:contains("' + buttonName + '")');
      }
    
      uploadFile(locator: string, fileName: string) {
        cy.wait(1000);
        cy.fixture(fileName).then((fileContent) => {
          cy.get(locator).attachFile({
            fileContent: fileContent.toString(),
            fileName: fileName,
            mimeType: 'image/jpg',
          });
        });
      }
      capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    
      selectValueFromDropDown(locator: string, text: string, locator2: string) {
        cy.get(locator).type(text);
        cy.get(locator2).click();
      }
    
      verifyLabel(locator: string, text: string) {
        cy.get(locator).should('contain', text);
      }
    
      static getResponsiveFlag() {
        return Cypress.env('isResponsive');
      }
    
      verifyTheActualAndExpectedValidationMessagesAreTheSame(
        expectedValidationMSG,
        actualValidationMSG,
      ) {
        expect(expectedValidationMSG.toString()).equal(
          actualValidationMSG.toString(),
        );
        actualValidationMSG.splice(0, actualValidationMSG.length);
        expectedValidationMSG.splice(0, expectedValidationMSG.length);
      }
    
      
    
      selectDropdDownValue(locator1: string, locator2: string, value: string) {
        cy.get(locator1).find(locator2).contains(value).click();
      }
    
      
      /* This function is to click on submit button */
      clickOnSubmitButton() {
        cy.get('button[type="submit"]').click();
      }
    
      /* This function is to verify text in table column */
      verifyValueInTable(colNum: number, text: string) {
        cy.get('tbody tr')
          .first()
          .each((tableRow) => {
            cy.wrap(tableRow).find('td').eq(colNum).contains(text);
          });
      }
    
      
    }
    