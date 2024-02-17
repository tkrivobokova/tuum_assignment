const personId  = "ID-2000";

let jwtToken;
let headers;

describe("Create a new account", () => {
    // login
    it("should login to get jwtToken", () => {
        cy.request({
            method: "POST",
            url: "https://auth-api.sandbox.tuumplatform.com/api/v1/employees/authorise",
            headers: {
                "x-channel-code": "SYSTEM",
                "x-tenant-code": "MB"
            },
            body: {
                "username": "modular.system",
                "password": "pass"
            }
        }).then((response) => {
            jwtToken = response.body.data.token;
            headers = {
                "x-channel-code": "SYSTEM",
                "x-tenant-code": "MB",
                "x-auth-token": jwtToken
            }
        });
    });

    // status code 200
    it("should return 200 when creating an account", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body:
                {
                    "accountTypeCode": "CURRENCY",
                    "overdraftAmount": {
                        "amount": 0.00,
                        "currencyCode": "EUR"
                    },
                    "personName": "Peter Alexander Schmidt",
                    "source": {
                        "sourceName": "string",
                        "sourceRef": "string"
                    },
                    "residencyCountryCode": "DE",
                    "currencyCode": "EUR",
                    "representatives": [
                        {
                            "personId": "ID-2001",
                            "accountRightCode": "ALL",
                            "limits": [
                                {
                                    "amount": {
                                        "amount": 100.00,
                                        "currencyCode": "EUR"
                                    },
                                    "accountLimitTypeCode": "DAILY"
                                }
                            ]
                        }
                    ],
                    "accountNumbers": [
                        {
                            "accountNumber": {
                                "type": "IBAN",
                                "value": "EE711266266878335196"
                            },
                            "countryCode": "EE",
                            "financialInstitutionId": {
                                "type": "BIC",
                                "value": "123456"
                            }
                        }
                    ],
                    "limits": [
                        {
                            "amount": {
                                "amount": 100,
                                "currencyCode": "EUR"
                            },
                            "accountLimitTypeCode": "DAILY"
                        }
                    ]
                }

        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property("data");
            expect(response.body).to.have.property("errors").that.equal(null);
            expect(response.body).to.have.property("validationErrors").that.equal(null);
            expect(response.body.data).to.have.property("personId").that.equal(personId);
            expect(response.body.data.accountId).not.null;
        });
    });

})
