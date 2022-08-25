const report = require('multiple-cucumber-html-reporter');
const data = require('./cypress/fixtures/browser.json')
const file= require('fs')

const Isversion=data.version;
console.log(" Testing version ",Isversion )
report.generate({
  jsonDir: 'cypress/reports/cucumber-json', // ** Path of .json file **//
  reportPath: 'cypress/reports/Results', // ** Path of .html file **//
  metadata: {
    
    browser: {
      name:'chrome',
      version: Isversion
    },
    
    device: 'Local test machine',
    platform: {
      name: 'MAC'
    },
  },
});
