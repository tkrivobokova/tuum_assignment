# Test plan for API testing

## Introduction
This test plan outlines the objective, scope, approach, test types, test tools, entry criteria, exit criteria and test 
deliverables for testing the API endpoints of the TUUM system.

## Objective
The objective of this testing effort is to test the behavior of the API endpoints. 

## Scope
### In scope:
* API endpoint:
  * Create person
  * Create account
  * Get balances
  * Create transactions
* Authorization check
* Required data presents check
* Code validity check
* HTTP method usage

### Out of scope:
* Performance testing
* Load testing
* Security testing beyond the authorization check
* Data validation check beyond the presents of the required field and code validity
* Status code 5xx (server errors) testing
* Status code 403 testing
* Test cases documentation
* Anything not listed in "In scope" section

## Approach
* Review endpoint documentation to understand how endpoint works
* Perform exploratory testing
* Write automated test scripts 
* Analyze and document test results

## Test Types
* Exploratory testing (manual)
* Automated testing

## Test Tools
* Swagger UI: exploratory testing
* Cypress: automated testing

## Entry and Exit criteria
### Entry criteria:
* API documentation is available
* Swagger UI is available

### Exit criteria:
* All automated tests are developed 
* Test result is documented

## Test deliverables
* Automated test script using Cypress
* Test result report with pass/fail status for each test case and explanation for fail statuses
