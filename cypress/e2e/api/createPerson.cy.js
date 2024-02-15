const createPerson400status = require("../../fixtures/payloads/createPerson400status.json");

const {
    emptyObject,
    personWithIDExists,
    personTypeCodeMissing,
    personTypeCodeEmpty,
    personTypeCodeSpace,
    identificationNumberMissing,
    identificationNumberEmpty,
    idNumberMissing,
    idNumberEmpty,
    idNumberSpace,
    idCountryCodeMissing,
    idCountryCodeEmpty,
    idCountryCodeInvalid,
    idCountryCodeSpace,
    addressesMissing,
    addressesEmpty,
    addressTypeCodeMissing,
    addressTypeCodeEmpty,
    addressTypeCodeSpace,
    countryCodeMissing,
    countryCodeEmpty,
    countryCodeInvalid,
    countryCodeSpace,
    cityCountryMissing,
    cityCountryEmpty,
    cityCountrySpace,
    street1Missing,
    street1Empty,
    street1Space,
    givenNameMissing,
    givenNameEmpty,
    givenNameSpace,
    surnameMissing,
    surnameEmpty,
    surnameSpace
} = createPerson400status;

const emptyObject400 = emptyObject;
const personWithIDExists400 = personWithIDExists;
const personTypeCodeMissing400 = personTypeCodeMissing;
const personTypeCodeEmpty400 = personTypeCodeEmpty;
const personTypeCodeSpace400 = personTypeCodeSpace;
const identificationNumberMissing400 = identificationNumberMissing;
const identificationNumberEmpty400 = identificationNumberEmpty;
const idNumberMissing400 = idNumberMissing;
const idNumberEmpty400 = idNumberEmpty;
const idNumberSpace400 = idNumberSpace;
const idCountryCodeMissing400 = idCountryCodeMissing;
const idCountryCodeEmpty400 = idCountryCodeEmpty;
const idCountryCodeInvalid400 = idCountryCodeInvalid;
const idCountryCodeSpace400 = idCountryCodeSpace;
const addressesMissing400 = addressesMissing;
const addressesEmpty400 = addressesEmpty;
const addressTypeCodeMissing400 = addressTypeCodeMissing;
const addressTypeCodeEmpty400 = addressTypeCodeEmpty;
const addressTypeCodeSpace400 = addressTypeCodeSpace;
const countryCodeMissing400 = countryCodeMissing;
const countryCodeEmpty400 = countryCodeEmpty;
const countryCodeInvalid400 = countryCodeInvalid;
const countryCodeSpace400 = countryCodeSpace;
const cityCountryMissing400 = cityCountryMissing;
const cityCountryEmpty400 = cityCountryEmpty;
const cityCountrySpace400 = cityCountrySpace;
const street1Missing400 = street1Missing;
const street1Empty400 = street1Empty;
const street1Space400 = street1Space;
const givenNameMissing400 = givenNameMissing;
const givenNameEmpty400 = givenNameEmpty;
const givenNameSpace400 = givenNameSpace;
const surnameMissing400 = surnameMissing;
const surnameEmpty400 = surnameEmpty;
const surnameSpace400 = surnameSpace;

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

describe("Create a new private person", function () {
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

    // status code 400
    it("should return 400 if payload is missing", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            failOnStatusCode:false,
            headers: headers
        }).then((response) => {
            expect(response.status).to.equal(400);
        });
    });

    it("should return 400 if payload is empty object", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: emptyObject400
        }).then((response) => {
            expect(response.status).to.equal(400);
        });
    });

    it("should return 400 if person with such id already exists", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: personWithIDExists400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.idNumberExists");
        });
    });

    it("should return 400 if personTypeCode is missing", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: personTypeCodeMissing400
        }).then((response) => {
            expect(response.status).to.equal(400);
        });
    });

    it("should return 400 if personTypeCode is empty", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: personTypeCodeEmpty400
        }).then((response) => {
            expect(response.status).to.equal(400);
        });
    });

    it("should return 400 if personTypeCode contains only space", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: personTypeCodeSpace400
        }).then((response) => {
            expect(response.status).to.equal(400);
        });
    });

    it("should return 400 if identificationNumber is missing", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: identificationNumberMissing400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.idNumberOnePrimaryRequired");
        });
    });

    it("should return 400 if identificationNumber is empty", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: identificationNumberEmpty400
        }).then((response) => {
            expect(response.status).to.equal(400);
        });
    });

    it("should return 400 if idNumber is missing", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: idNumberMissing400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.idNumberMissing");
        });
    });

    it("should return 400 if idNumber is empty", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: idNumberEmpty400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.idNumberMissing");
        });
    });

    it("should return 400 if idNumber contains only spaces", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: idNumberSpace400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.idNumberMissing");
        });
    });

    it("should return 400 if idCountryCode is missing", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: idCountryCodeMissing400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.idNumberCountryMissing");
        });
    });

    it("should return 400 if idCountryCode is empty", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: idCountryCodeEmpty400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.idNumberCountryMissing");
        });
    });

    it("should return 400 if idCountryCode is invalid", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: idCountryCodeInvalid400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.idNumberCountryInvalid");
        });
    });

    it("should return 400 if idCountryCode contains only spaces", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: idCountryCodeSpace400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.idNumberCountryMissing");
        });
    });

    it("should return 400 if addresses is missing", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: addressesMissing400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.addressesMissing");
        });
    });

    it("should return 400 if addresses is empty", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: addressesEmpty400
        }).then((response) => {
            expect(response.status).to.equal(400);
        });
    });

    it("should return 400 if addressTypeCode is missing", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: addressTypeCodeMissing400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.addressRegistrationAtLeastOneRequired");
        });
    });

    it("should return 400 if addressTypeCode is empty", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: addressTypeCodeEmpty400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.addressRegistrationAtLeastOneRequired");
        });
    });

    it("should return 400 if addressTypeCode contains only spaces", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: addressTypeCodeSpace400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.addressRegistrationAtLeastOneRequired");
        });
    });

    it("should return 400 if countryCode is missing", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: countryCodeMissing400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.addressCountryMissing");
        });
    });

    it("should return 400 if countryCode is empty", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: countryCodeEmpty400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.addressCountryMissing");
        });
    });

    it("should return 400 if countryCode is invalid", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: countryCodeInvalid400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.addressCountryInvalid");
        });
    });

    it("should return 400 if countryCode contains only spaces", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: countryCodeSpace400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.addressCountryMissing");
        });
    });

    it("should return 400 if cityCountry is missing", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: cityCountryMissing400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.addressCityCountyMissing");
        });
    });

    it("should return 400 if cityCountry is empty", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: cityCountryEmpty400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.addressCityCountyMissing");
        });
    });

    it("should return 400 if cityCountry contains only spaces", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: cityCountrySpace400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.addressCityCountyMissing");
        });
    });

    it("should return 400 if street1 is missing", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: street1Missing400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.addressStreet1Missing");
        });
    });

    it("should return 400 if street1 is empty", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: street1Empty400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.addressStreet1Missing");
        });
    });

    it("should return 400 if street1 contains only spaces", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: street1Space400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.addressStreet1Missing");
        });
    });

    it("should return 400 if givenName is missing", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: givenNameMissing400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.personGivenNameMissing");
        });
    });

    it("should return 400 if givenName is empty", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: givenNameEmpty400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.personGivenNameMissing");
        });
    });

    it("should return 400 if givenName contains only spaces", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: givenNameSpace400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.personGivenNameMissing");
        });
    });

    it("should return 400 if surname is missing", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: surnameMissing400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.personSurnameMissing");
        });
    });

    it("should return 400 if surname is empty", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: surnameEmpty400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.personSurnameMissing");
        });
    });

    it("should return 400 if surname contains only spaces", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: surnameSpace400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.personSurnameMissing");
        });
    });

    // status code 401
    it("should return 401 if user is not logged in", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: {
                "x-channel-code": "SYSTEM",
                "x-tenant-code": "MB"
            },
            failOnStatusCode: false,
            body: personWithIDExists400
        }).then((response) => {
            expect(response.status).to.equal(401);
        });
    });

    //status code 404
    it("should return 404 if URL is wrong", () => {
        cy.request({
            method: "POST",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/person",
            headers: headers,
            failOnStatusCode: false,
            body: personWithIDExists400

        }).then((response) => {
            expect(response.status).to.equal(404);
        });
    });

    // status code 405
    it("should return 405 if PATCH method is used", () => {
        cy.request({
            method: "PATCH",
            url: "https://person-api.sandbox.tuumplatform.com/api/v2/persons",
            headers: headers,
            failOnStatusCode: false,
            body: personWithIDExists400
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
            body: personWithIDExists400
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
            body: personWithIDExists400
        }).then((response) => {
            expect(response.status).to.equal(405);
        });
    });
});
