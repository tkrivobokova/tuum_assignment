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

    // status code 400

    // status code 401
    it("should return 401 if user is not logged in", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: {
                "x-channel-code": "SYSTEM",
                "x-tenant-code": "MB"
            },
            failOnStatusCode: false,
            body: {
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
            expect(response.status).to.equal(401);
        });
    });

    //status code 404
    it("should return 404 if URL is wrong", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/account",
            headers: headers,
            failOnStatusCode: false,
            body: {
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
            expect(response.status).to.equal(404);
            expect(response.body).to.have.property("error").that.equal("Not Found");
            expect(response.body).to.have.property("path").that.equal("/api/v4/persons/" + personId + "/account");
        });
    });

    it("should return 404 if personId is missing", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: {
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
            expect(response.status).to.equal(404);
            expect(response.body).to.have.property("error").that.equal("Not Found");
            expect(response.body).to.have.property("path").that.equal("/api/v4/persons/accounts");
        });
    });

    // status code 405
    it("should return 405 if PATCH method is used", () => {
        cy.request({
            method: "PATCH",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: {
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
            expect(response.status).to.equal(405);
            expect(response.body).to.have.property("errors");
            expect(response.body).to.have.property("validationErrors");
        });
    });

    it("should return 405 if GET method is used", () => {
        cy.request({
            method: "GET",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(405);
            expect(response.body).to.have.property("errors");
            expect(response.body).to.have.property("validationErrors");
        });
    });

    it("should return 405 if DELETE method is used", () => {
        cy.request({
            method: "DELETE",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: {
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
            expect(response.status).to.equal(405);
            expect(response.body).to.have.property("errors");
            expect(response.body).to.have.property("validationErrors");
        });
    });

    it("should return 405 if PUT method is used", () => {
        cy.request({
            method: "PUT",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: {
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
            expect(response.status).to.equal(405);
            expect(response.body).to.have.property("errors");
            expect(response.body).to.have.property("validationErrors");
        });
    });
})
