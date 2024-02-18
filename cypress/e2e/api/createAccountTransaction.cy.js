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
    it.skip("should return 200 when creating an account transaction", () => {
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
