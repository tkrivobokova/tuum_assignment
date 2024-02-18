# Test Results

## Test results in general
![img.png](img.png)

## "Create person" endpoint test results
### In general:
![img_1.png](img_1.png)
### In details:
![img_2.png](img_2.png)
![img_3.png](img_3.png)
![img_4.png](img_4.png)

### Explanation to the failed tests:
![img_5.png](img_5.png)
![img_6.png](img_6.png)
![img_7.png](img_7.png)
![img_8.png](img_8.png)
![img_9.png](img_9.png)
![img_10.png](img_10.png)
Error 1: If payload is missing the program should return status code 400 because the valid payload was not provided from the 
client side, not from the server side
Errors 2-9: If a required field is missing or empty/null/contains only spaces the program should return 400 status code
because the valid payload was not provided from the client side, not from the server side
Errors 10-13: "givenName" is a required field (at least from the given payload example I consider it to be required field),
if the required field is not provided in the payload, the program should return corresponding error message

