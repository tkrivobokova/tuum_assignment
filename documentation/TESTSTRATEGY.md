# Testing Strategy for API Testing

### Scope and Objectives:
The scope is to ensure that the behavior of endpoints:
* Create person
* Create account
* Get balances
* Create transactions

respond to the expected conditions. This includes:
* Validating the correctness of data sent and received
* Non authorized user cannot access data
* Request can be successfully sent only if correct HTTP method is used
* Correct error code is returned if error occurs

### Testing Approach:
Testing will involve manual and automated testing techniques. For manual testing the exploratory testing will be used. 
Automated testing will consist of automated regression API tests

### Testing Types to Perform:
Exploratory testing (manual)

Automated testing

### Testing Tools:
Swagger UI: For manual and exploratory testing

Cypress: For automated tests

### Test Deliverables:
Automated Test Scripts using Cypress

Automated test report with pass/fail status for each test case and list of issues founded with explanation

