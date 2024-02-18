const accountId  = "ID-2000";
const createAccount = require("../../fixtures/payloads/createAccountTransaction.json");

const {
    validPayload,
    emptyObject,
    transactionTypeCodeMissing,
    transactionTypeCodeEmpty,
    transactionTypeCodeSpace,
    transactionTypeCodeNull,
    transactionTypeCodeInvalid,
    moneyMissing,
    moneyEmpty,
    money_amountMissing,
    money_amountEmpty,
    money_amountSpace,
    money_amountNull,
    money_amountNegative,
    money_amountInvalid,
    money_amountTooLarge,
    money_currencyCodeMissing,
    money_currencyCodeEmpty,
    money_currencyCodeSpace,
    money_currencyCodeNull,
    money_currencyCodeInvalid
} = createAccount;

const validPayload200 = validPayload;
const emptyObject400 = emptyObject;
const transactionTypeCodeMissing400 = transactionTypeCodeMissing;
const transactionTypeCodeEmpty400 = transactionTypeCodeEmpty;
const transactionTypeCodeSpace400 = transactionTypeCodeSpace;
const transactionTypeCodeNull400 = transactionTypeCodeNull;
const transactionTypeCodeInvalid400 = transactionTypeCodeInvalid;
const moneyMissing400 = moneyMissing;
const moneyEmpty400 = moneyEmpty;
const money_amountMissing400 = money_amountMissing;
const money_amountEmpty400 = money_amountEmpty;
const money_amountSpace400 = money_amountSpace;
const money_amountNull400 = money_amountNull;
const money_amountNegative400 = money_amountNegative;
const money_amountInvalid400 = money_amountInvalid;
const money_amountTooLarge400 = money_amountTooLarge;
const money_currencyCodeMissing400 = money_currencyCodeMissing;
const money_currencyCodeEmpty400 = money_currencyCodeEmpty;
const money_currencyCodeSpace400 = money_currencyCodeSpace;
const money_currencyCodeNull400 = money_currencyCodeNull;
const money_currencyCodeInvalid400 = money_currencyCodeInvalid;

let jwtToken;
let headers;

describe("Create a new account transaction", () => {
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
    it("should return 200 when creating an account transaction", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: validPayload200
        }).then((response) => {
            const data = response.body.data;
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property("data");
            expect(response.body).to.have.property("errors").that.equal(null);
            expect(response.body).to.have.property("validationErrors").that.equal(null);
            data.forEach(item => {
                expect(item.transactionTypeCode).to.equal("CARD_PUR");
                expect(item.amount).to.equal(1.22);
                expect(item.accountTransactionId).not.null;
            });
        });
    });

    // status code 400
    it("should return 400 if payload is missing", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
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
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: emptyObject400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
        });
    });

    it("should return 400 if transactionTypeCode is missing", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: transactionTypeCodeMissing400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "transactionTypeCode");
            const errorCode = error.errors.find(error => error.code === "err.notBlank");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;

        });
    });

    it("should return 400 if transactionTypeCode is empty", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: transactionTypeCodeEmpty400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "transactionTypeCode");
            const errorCode = error.errors.find(error => error.code === "err.notBlank");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;

        });
    });

    it("should return 400 if transactionTypeCode contains only spaces", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: transactionTypeCodeSpace400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "transactionTypeCode");
            const errorCode = error.errors.find(error => error.code === "err.notBlank");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;

        });
    });

    it("should return 400 if transactionTypeCode is null", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: transactionTypeCodeNull400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "transactionTypeCode");
            const errorCode = error.errors.find(error => error.code === "err.notBlank");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;

        });
    });

    it("should return 400 if transactionTypeCode is invalid", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: transactionTypeCodeInvalid400
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.transactionTypeNotFound");
            expect(response.body).to.have.property("validationErrors");
        });
    });

    it("should return 400 if money is missing", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: moneyMissing400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "money");
            const errorCode = error.errors.find(error => error.code === "err.notNull");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;

        });
    });

    it("should return 400 if money is empty", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: moneyEmpty400
        }).then((response) => {
            const error1 = response.body.validationErrors.find(error => error.field === "money.currencyCode" && error.errors.some(e => e.code === "err.notNull"));
            const error2 = response.body.validationErrors.find(error => error.field === "money.amount" && error.errors.some(e => e.code === "err.notNull"));

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error1).to.exist;
            expect(error2).to.exist;
        });
    });

    it("should return 400 if money_amount is missing", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: money_amountMissing400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "money.amount");
            const errorCode = error.errors.find(error => error.code === "err.notNull");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;

        });
    });

    it("should return 400 if money_amount is empty", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: money_amountEmpty400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "money.amount");
            const errorCode = error.errors.find(error => error.code === "err.notNull");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;

        });
    });

    it("should return 400 if money_amount contains only spaces", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: money_amountSpace400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "money.amount");
            const errorCode = error.errors.find(error => error.code === "err.notNull");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;

        });
    });

    it("should return 400 if money_amount is null", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: money_amountNull400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "money.amount");
            const errorCode = error.errors.find(error => error.code === "err.notNull");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if money_amount is negative number", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: money_amountNegative400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "money.amount");
            const errorCode = error.errors.find(error => error.code === "err.mustBePositive");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if money_amount is invalid", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: money_amountInvalid400
        }).then((response) => {expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("Invalid request field: money.amount");
            expect(response.body).to.have.property("validationErrors");
        });
    });

    it("should return 400 if money_amount is too large number", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: money_amountTooLarge400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "money.amount");
            const errorCode = error.errors.find(error => error.code === "err.invalidPrecision");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if money_currencyCode is missing", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: money_currencyCodeMissing400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "money.currencyCode");
            const errorCode = error.errors.find(error => error.code === "err.notNull");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if money_currencyCode is empty", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: money_currencyCodeEmpty400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "money.currencyCode");
            const errorCode = error.errors.find(error => error.code === "err.notNull");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if money_currencyCode contains only spaces", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: money_currencyCodeSpace400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "money.currencyCode");
            const errorCode = error.errors.find(error => error.code === "err.notNull");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if money_currencyCode is null", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: money_currencyCodeNull400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "money.currencyCode");
            const errorCode = error.errors.find(error => error.code === "err.notNull");

            expect(response.status).to.equal(400);
            expect(response.body.errors).to.include("err.validationErrors");
            expect(response.body).to.have.property("validationErrors");
            expect(error).to.exist;
            expect(errorCode).to.exist;
        });
    });

    it("should return 400 if money_currencyCode is invalid", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: money_currencyCodeInvalid400
        }).then((response) => {
            const error = response.body.validationErrors.find(error => error.field === "money.currencyCode");
            const errorCode = error.errors.find(error => error.code === "err.invalidCurrencyCode");

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
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
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
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transaction",
            headers: headers,
            failOnStatusCode: false,
            body: validPayload200
        }).then((response) => {
            expect(response.status).to.equal(404);
            expect(response.body).to.have.property("error").that.equal("Not Found");
            expect(response.body).to.have.property("path").that.equal("/api/v4/accounts/" + accountId + "/transaction");
        });
    });

    it("should return 404 if accountId is missing", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/transactions",
            headers: headers,
            failOnStatusCode: false,
            body: validPayload200
        }).then((response) => {
            expect(response.status).to.equal(404);
            expect(response.body).to.have.property("error").that.equal("Not Found");
            expect(response.body).to.have.property("path").that.equal("/api/v4/accounts/transactions");
        });
    });

    // status code 405
    it("should return 405 if PATCH method is used", () => {
        cy.request({
            method: "PATCH",
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
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
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
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
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
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
            url: "https://account-api.sandbox.tuumplatform.com/api/v4/accounts/" + accountId + "/transactions",
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
