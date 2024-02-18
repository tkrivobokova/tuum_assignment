const personId  = "ID-2000";
const createAccount = require("../../fixtures/payloads/createAccount.json");

const {
    validPayload,
    emptyObject,
    accountTypeCodeMissing,
    accountTypeCodeEmpty,
    accountTypeCodeSpace,
    accountTypeCodeNull,
    accountTypeCodeInvalid,
    personNameMissing,
    personNameEmpty,
    personNameSpace,
    personNameNull,
    residencyCountryCodeMissing,
    residencyCountryCodeEmpty,
    residencyCountryCodeSpace,
    residencyCountryCodeNull,
    residencyCountryCodeInvalid,
    currencyCodeMissing,
    currencyCodeEmpty,
    currencyCodeSpace,
    currencyCodeNull,
    currencyCodeInvalid,
} = createAccount;

const validPayload200 = validPayload;
const emptyObject400 = emptyObject;
const accountTypeCodeMissing400 = accountTypeCodeMissing;
const accountTypeCodeEmpty400 = accountTypeCodeEmpty;
const accountTypeCodeSpace400 = accountTypeCodeSpace;
const accountTypeCodeNull400 = accountTypeCodeNull;
const accountTypeCodeInvalid400 = accountTypeCodeInvalid;
const personNameMissing400 = personNameMissing;
const personNameEmpty400 = personNameEmpty;
const personNameSpace400 = personNameSpace;
const personNameNull400 = personNameNull;
const residencyCountryCodeMissing400 = residencyCountryCodeMissing;
const residencyCountryCodeEmpty400 = residencyCountryCodeEmpty;
const residencyCountryCodeSpace400 = residencyCountryCodeSpace;
const residencyCountryCodeNull400 = residencyCountryCodeNull;
const residencyCountryCodeInvalid400 = residencyCountryCodeInvalid;
const currencyCodeMissing400 = currencyCodeMissing;
const currencyCodeEmpty400 = currencyCodeEmpty;
const currencyCodeSpace400 = currencyCodeSpace;
const currencyCodeNull400 = currencyCodeNull;
const currencyCodeInvalid400 = currencyCodeInvalid;

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
            body: validPayload200
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
    it("should return 400 if payload is missing", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.have.property("errors");
            expect(response.body).to.have.property("validationErrors");
        });
    });

    it("should return 400 if payload is empty object", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: emptyObject400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
        });
    });

    it("should return 400 if accountTypeCode is missing", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: accountTypeCodeMissing400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "accountTypeCode");
            const errorCode = error.errors.find(error => error.code === "err.notNull");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;

        });
    });

    it("should return 400 if accountTypeCode is empty", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: accountTypeCodeEmpty400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "accountTypeCode");
            const errorCode = error.errors.find(error => error.code === "err.notNull");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if accountTypeCode contains only spaces", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: accountTypeCodeSpace400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "accountTypeCode");
            const errorCode = error.errors.find(error => error.code === "err.notNull");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if accountTypeCode is null", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: accountTypeCodeNull400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "accountTypeCode");
            const errorCode = error.errors.find(error => error.code === "err.notNull");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if accountTypeCode is invalid", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: accountTypeCodeInvalid400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "accountTypeCode");
            const errorCode = error.errors.find(error => error.code === "err.invalidValue");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if personName is missing", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: personNameMissing400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "personName");
            const errorCode = error.errors.find(error => error.code === "err.notBlank");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if personName is empty", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: personNameEmpty400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "personName");
            const errorCode = error.errors.find(error => error.code === "err.notBlank");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if personName contains only spaces", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: personNameSpace400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "personName");
            const errorCode = error.errors.find(error => error.code === "err.notBlank");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if personName is null", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: personNameNull400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "personName");
            const errorCode = error.errors.find(error => error.code === "err.notBlank");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if residencyCountryCode is missing", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: residencyCountryCodeMissing400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "residencyCountryCode");
            const errorCode = error.errors.find(error => error.code === "err.notBlank");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if residencyCountryCode is empty", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: residencyCountryCodeEmpty400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "residencyCountryCode");
            const errorCode = error.errors.find(error => error.code === "err.notBlank");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if residencyCountryCode contains only spaces", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: residencyCountryCodeSpace400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "residencyCountryCode");
            const errorCode = error.errors.find(error => error.code === "err.notBlank");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if residencyCountryCode is null", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: residencyCountryCodeNull400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "residencyCountryCode");
            const errorCode = error.errors.find(error => error.code === "err.notBlank");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if residencyCountryCode is invalid", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: residencyCountryCodeInvalid400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "residencyCountryCode");
            const errorCode = error.errors.find(error => error.code === "err.length");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if currencyCode is missing", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: currencyCodeMissing400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "currencyCode");
            const errorCode = error.errors.find(error => error.code === "err.notBlank");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if currencyCode is empty", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: currencyCodeEmpty400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "currencyCode");
            const errorCode = error.errors.find(error => error.code === "err.notBlank");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if currencyCode contains only spaces", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: currencyCodeSpace400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "currencyCode");
            const errorCode = error.errors.find(error => error.code === "err.notBlank");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if currencyCode is null", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: currencyCodeNull400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "currencyCode");
            const errorCode = error.errors.find(error => error.code === "err.notBlank");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if currencyCode is invalid", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: currencyCodeInvalid400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "currencyCode");
            const errorCode = error.errors.find(error => error.code === "err.currencyCodeInvalid");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

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
            body: validPayload200
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
            body: validPayload200
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
            body: validPayload200
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
            body: validPayload200
        }).then((response) => {
            expect(response.status).to.equal(405);
            expect(response.body).to.have.property("errors").to.include("err.httpMethodNotAllowed");
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
            expect(response.body).to.have.property("errors").to.include("err.httpMethodNotAllowed");
            expect(response.body).to.have.property("validationErrors");
        });
    });

    it("should return 405 if DELETE method is used", () => {
        cy.request({
            method: "DELETE",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: validPayload200
        }).then((response) => {
            expect(response.status).to.equal(405);
            expect(response.body).to.have.property("errors").to.include("err.httpMethodNotAllowed");
            expect(response.body).to.have.property("validationErrors");
        });
    });

    it("should return 405 if PUT method is used", () => {
        cy.request({
            method: "PUT",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/persons/" + personId + "/accounts",
            headers: headers,
            failOnStatusCode: false,
            body: validPayload200
        }).then((response) => {
            expect(response.status).to.equal(405);
            expect(response.body).to.have.property("errors").to.include("err.httpMethodNotAllowed");
            expect(response.body).to.have.property("validationErrors");
        });
    });
})
