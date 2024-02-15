describe("Create a new private person", function () {
    let jwtToken;
    let headers;

    function getRandomIDNumber () {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const length = Math.floor(Math.random() * 4) + 1;
        const randomNumber = Math.floor(Math.random() * 100000) + 1;

        let letterCombination = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * letters.length);
            letterCombination += letters[randomIndex];
        }

        return randomNumber + letterCombination;
    }

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

    it("should return 200 when creating a person", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            body:
                {
                    "personTypeCode":"P",
                    "identificationNumber":{
                        "primary":true,
                        "idNumber":"ID-" + getRandomIDNumber(),
                        "idCountryCode":"EE"
                    },
                    "addresses":[
                        {
                            "addressTypeCode":"R",
                            "countryCode":"EE",
                            "cityCounty":"Tallinn",
                            "street1":"Address"
                        }
                    ],
                    "givenName":"Test",
                    "surname":"User"
                }

        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.data).to.have.property("fullName").that.equals("Test User")
        });
    });

    it("should return 401 if user is not logged in", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: {
                "x-channel-code": "SYSTEM",
                "x-tenant-code": "MB"
            },
            failOnStatusCode: false,
            body:
                {
                    "personTypeCode":"P",
                    "identificationNumber":{
                        "primary":true,
                        "idNumber":"ID-" + getRandomIDNumber(),
                        "idCountryCode":"EE"
                    },
                    "addresses":[
                        {
                            "addressTypeCode":"R",
                            "countryCode":"EE",
                            "cityCounty":"Tallinn",
                            "street1":"Address"
                        }
                    ],
                    "givenName":"Test",
                    "surname":"User"
                }

        }).then((response) => {
            expect(response.status).to.equal(401);
        });
    });

    it("should return 405 if PATCH method is used", () => {
        cy.request({
            method: "PATCH",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body:
                {
                    "personTypeCode":"P",
                    "identificationNumber":{
                        "primary":true,
                        "idNumber":"ID-" + getRandomIDNumber(),
                        "idCountryCode":"EE"
                    },
                    "addresses":[
                        {
                            "addressTypeCode":"R",
                            "countryCode":"EE",
                            "cityCounty":"Tallinn",
                            "street1":"Address"
                        }
                    ],
                    "givenName":"Test",
                    "surname":"User"
                }

        }).then((response) => {
            expect(response.status).to.equal(405);
        });
    });

    it("should return 405 if GET method is used", () => {
        cy.request({
            method: "GET",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false

        }).then((response) => {
            expect(response.status).to.equal(405);
        });
    });

    it("should return 405 if DELETE method is used", () => {
        cy.request({
            method: "DELETE",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body:
                {
                    "personTypeCode":"P",
                    "identificationNumber":{
                        "primary":true,
                        "idNumber":"ID-" + getRandomIDNumber(),
                        "idCountryCode":"EE"
                    },
                    "addresses":[
                        {
                            "addressTypeCode":"R",
                            "countryCode":"EE",
                            "cityCounty":"Tallinn",
                            "street1":"Address"
                        }
                    ],
                    "givenName":"Test",
                    "surname":"User"
                }

        }).then((response) => {
            expect(response.status).to.equal(405);
        });
    });

    it("should return 405 if PUT method is used", () => {
        cy.request({
            method: "PUT",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body:
                {
                    "personTypeCode":"P",
                    "identificationNumber":{
                        "primary":true,
                        "idNumber":"ID-" + getRandomIDNumber(),
                        "idCountryCode":"EE"
                    },
                    "addresses":[
                        {
                            "addressTypeCode":"R",
                            "countryCode":"EE",
                            "cityCounty":"Tallinn",
                            "street1":"Address"
                        }
                    ],
                    "givenName":"Test",
                    "surname":"User"
                }

        }).then((response) => {
            expect(response.status).to.equal(405);
        });
    });
});
