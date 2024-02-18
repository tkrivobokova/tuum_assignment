# Test Assignment for Quality Assurance Engineer (TUUM) by Tatjana Krivobokova
## Description
> Goal of this assignment is to assess QA engineering skills.
> 
> Tuum is an API first core based banking platform and therefore APIs are our most valuable asset. It is QA engineers responsibility to guarantee the quality and reliability of APIs

## Test Strategy
Test Strategy can be found here: [Test Strategy](/documentation/TESTSTRATEGY.md)

## Test Plan
Test Plan can be found here: [Test Plan](/documentation/TESTPLAN.md)

## Test Results
Test results with errors explanation can be found here: [Test Results](/documentation/TESTRESULTS.md)

## Tutorial "How to run API tests"

clone this repo to a local directory

`git clone https://github.com/tkrivobokova/tuum_assignment.git`

cd into the cloned repo

`cd tuum_assignment`

install the node_modules

`npm install`

if needed

`sudo npm install`

open Cypress to run the test using UI application (choose this option to run each spec separately)

`npx cypress open`

or run the test in headless mode (choose this option to run all the specs and get the test report)

`npx cypress run`
