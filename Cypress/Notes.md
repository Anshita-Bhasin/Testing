# Cypress10 Installation:

Pre-Requisite : Node.js 12 or 14 and above

1. npm init --> This will create package.json
2. npm install cypress --save-dev
3. After Installation, enter command - npx cypress open
4. npm install @badeball/cypress-cucumber-preprocessor
5. Add the below code in cypress.config.js >setupNodeEvents
    const cucumber = require('cypress-cucumber-preprocessor').default
      on('file:preprocessor', cucumber()) 
6. Add support for feature files ,code in cypress.config.js :
   specPattern: 'cypress/e2e/features/*.{feature,features}',
    excludeSpecPattern: "**/cypress/pages/*,cypress/e2e/step-definition/*"    
7. npm install cypress-commands => To find out text    
8. Cypress .press() command that simulates pressing a keyboard key.


 

# Browser:

1. Install Safari Webkit:
  
  run command - npm install --save-dev playwright-webkit and 
  
  Add experimentalWebKitSupport: true to cypress.config.js



# Commands:

1. To run in headless mode one specific spec : npx cypress run --spec "path of specfile.js" , Example : npx cypress run --spec "cypress/e2e/actions.cy.js"
2. To run in browser - npx cypress open --browser chrome --e2e 


# Cypress - Mocha Hooks:

1. Before() --> Executed Once, before the first test cases
2. BeforeEach() --> Executed before each test case
3. AfterEach() --> Executed after each test case
4. After() --> Executed after all the last test case

# Cypress - Cucumber Hooks

1. @BeforeStep --> Executed Once, before the first test cases
2. @AfterStep --> Executed before each test case
3. @Before --> Executed Once, before the first test cases
4. @After --> Executed after all the last test case


# Cypress - Commands

1. cy.go('back') or cy.go('-1') --> To navigate back 
2. cy.go('forward') or cy.go('1') --> To navigate forward
3. cy.reload() --> Refresh the page
4. cy.visit(url) --> opens url 
5. cy.get(locator).should().and() --> .should() , .and() - Implicit wait
6. expect() and assert() --> Explicit Wait eg : expect(obj).to.equal(obj)

# Cypress Assertions
1. cy.get(locator).should('have.length',n) -->length validation , validate number of elements
2. cy.get(locator).find().should('not.have.class') --> class validation
3. cy.get('a').parent('span').should('contain', 'Testing') --> Text Content: Validates element to have a specified text. 
4. cy.get('button').should('be.visible') --> validates whether the element is visible or not
5. cy.get(locator).should('not.exist')

# Xpath Support
1. Install npm install -D cypress-xpath
2. require('cypress-xpath')

# Dependencies
1. npm install cypress-parallel => To run test in parallel on local (https://github.com/tnicola/cypress-parallel )


# Cucumber Installation

1. npm i @badeball/cypress-cucumber-preprocessor
2. npm i cypress @bahmutov/cypress-esbuild-preprocessor esbuild



# Hide XHR Request call in cypress 
1. Copy the below code in support /e2e.js for Cypress10 or cypress/support/index.js (Below Cypress 10)

This workaround simply hides any command log entries that originate from fetch/XHR requests.


**Syntax**
// Hide fetch/XHR requests
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}


# Cypress - Plugin for pressing any keyboard command
Cypress .press() command that simulates pressing a keyboard key.

Installation
Run npm i @walmyr-filho/cy-press -D to install it as a dev dependency.


