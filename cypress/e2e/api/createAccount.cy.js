const personId  = "ID-2000";
const createAccount = require("../../fixtures/payloads/createAccount.json");

const {
    validPayload,
    emptyObject,
    accountTypeCodeMissing,
    accountTypeCodeEmpty,
    accountTypeCodeSpace,
    accountTypeCodeNull,
    overdraftAmountMissing,
    overdraftAmountEmpty,
    overdraftAmount_amountMissing,
    overdraftAmount_amountEmpty,
    overdraftAmount_amountSpace,
    overdraftAmount_amountNull,
    overdraftAmount_currencyCodeMissing,
    overdraftAmount_currencyCodeEmpty,
    overdraftAmount_currencyCodeSpace,
    overdraftAmount_currencyCodeNull,
    overdraftAmount_currencyCodeInvalid,
    personNameMissing,
    personNameEmpty,
    personNameSpace,
    personNameNull,
    sourceMissing,
    sourceEmpty,
    source_sourceNameMissing,
    source_sourceNameEmpty,
    source_sourceNameSpace,
    source_sourceNameNull,
    source_sourceRefMissing,
    source_sourceRefEmpty,
    source_sourceRefSpace,
    source_sourceRefNull,
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
    representativesMissing,
    representativesEmpty,
    representatives_personIdMissing,
    representatives_personIdEmpty,
    representatives_personIdSpace,
    representatives_personIdNull,
    representatives_accountRightCodeMissing,
    representatives_accountRightCodeEmpty,
    representatives_accountRightCodeSpace,
    representatives_accountRightCodeNull,
    representatives_accountRightCodeInvalid,
    representatives_limitsMissing,
    representatives_limitsEmpty,
    representatives_limits_amountMissing,
    representatives_limits_amountEmpty,
    representatives_limits_amount_amountMissing,
    representatives_limits_amount_amountEmpty,
    representatives_limits_amount_amountSpace,
    representatives_limits_amount_amountNull,
    representatives_limits_amount_currencyCodeMissing,
    representatives_limits_amount_currencyCodeEmpty,
    representatives_limits_amount_currencyCodeSpace,
    representatives_limits_amount_currencyCodeNull,
    representatives_limits_amount_currencyCodeInvalid,
    representatives_limits_accountLimitTypeCodeMissing,
    representatives_limits_accountLimitTypeCodeEmpty,
    representatives_limits_accountLimitTypeCodeSpace,
    representatives_limits_accountLimitTypeCodeNull,
    representatives_limits_accountLimitTypeCodeInvalid,
    accountNumbersMissing,
    accountNumbersEmpty,
    accountNumbers_accountNumberMissing,
    accountNumbers_accountNumberEmpty,
    accountNumbers_accountNumber_typeMissing,
    accountNumbers_accountNumber_typeEmpty,
    accountNumbers_accountNumber_typeSpace,
    accountNumbers_accountNumber_typeNull,
    accountNumbers_accountNumber_typeInvalid,
    accountNumbers_accountNumber_valueMissing,
    accountNumbers_accountNumber_valueEmpty,
    accountNumbers_accountNumber_valueSpace,
    accountNumbers_accountNumber_valueNull,
    accountNumbers_countryCodeMissing,
    accountNumbers_countryCodeEmpty,
    accountNumbers_countryCodeSpace,
    accountNumbers_countryCodeNull,
    accountNumbers_countryCodeInvalid,
    accountNumbers_financialInstitutionIdMissing,
    accountNumbers_financialInstitutionIdEmpty,
    accountNumbers_financialInstitutionId_typeMissing,
    accountNumbers_financialInstitutionId_typeEmpty,
    accountNumbers_financialInstitutionId_typeSpace,
    accountNumbers_financialInstitutionId_typeNull,
    accountNumbers_financialInstitutionId_typeInvalid,
    accountNumbers_financialInstitutionId_valueMissing,
    accountNumbers_financialInstitutionId_valueEmpty,
    accountNumbers_financialInstitutionId_valueSpace,
    accountNumbers_financialInstitutionId_valueNull,
    limitsMissing,
    limitsEmpty,
    limits_amountMissing,
    limits_amountEmpty,
    limits_amount_amountMissing,
    limits_amount_amountEmpty,
    limits_amount_amountSpace,
    limits_amount_amountNull,
    limits_amount_currencyCodeMissing,
    limits_amount_currencyCodeEmpty,
    limits_amount_currencyCodeSpace,
    limits_amount_currencyCodeNull,
    limits_amount_currencyCodeInvalid,
    limits_accountLimitTypeCodeMissing,
    limits_accountLimitTypeCodeEmpty,
    limits_accountLimitTypeCodeSpace,
    limits_accountLimitTypeCodeNull,
    limits_accountLimitTypeCodeInvalid
} = createAccount;

const validPayload200 = validPayload;
const emptyObject400 = emptyObject;
const accountTypeCodeMissing400 = accountTypeCodeMissing;
const accountTypeCodeEmpty400 = accountTypeCodeEmpty;
const accountTypeCodeSpace400 = accountTypeCodeSpace;
const accountTypeCodeNull400 = accountTypeCodeNull;
const overdraftAmountMissing400 = overdraftAmountMissing;
const overdraftAmountEmpty400 = overdraftAmountEmpty;
const overdraftAmount_amountMissing400 = overdraftAmount_amountMissing;
const overdraftAmount_amountEmpty400 = overdraftAmount_amountEmpty;
const overdraftAmount_amountSpace400 = overdraftAmount_amountSpace;
const overdraftAmount_amountNull400 = overdraftAmount_amountNull;
const overdraftAmount_currencyCodeMissing400 = overdraftAmount_currencyCodeMissing;
const overdraftAmount_currencyCodeEmpty400 = overdraftAmount_currencyCodeEmpty;
const overdraftAmount_currencyCodeSpace400 = overdraftAmount_currencyCodeSpace;
const overdraftAmount_currencyCodeNull400 = overdraftAmount_currencyCodeNull;
const overdraftAmount_currencyCodeInvalid400 = overdraftAmount_currencyCodeInvalid;
const personNameMissing400 = personNameMissing;
const personNameEmpty400 = personNameEmpty;
const personNameSpace400 = personNameSpace;
const personNameNull400 = personNameNull;
const sourceMissing400 = sourceMissing;
const sourceEmpty400 = sourceEmpty;
const source_sourceNameMissing400 = source_sourceNameMissing;
const source_sourceNameEmpty400 = source_sourceNameEmpty;
const source_sourceNameSpace400 = source_sourceNameSpace;
const source_sourceNameNull400 = source_sourceNameNull;
const source_sourceRefMissing400 = source_sourceRefMissing;
const source_sourceRefEmpty400 = source_sourceRefEmpty;
const source_sourceRefSpace400 = source_sourceRefSpace;
const source_sourceRefNull400 = source_sourceRefNull;
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
const representativesMissing400 = representativesMissing;
const representativesEmpty400 = representativesEmpty;
const representatives_personIdMissing400 = representatives_personIdMissing;
const representatives_personIdEmpty400 = representatives_personIdEmpty;
const representatives_personIdSpace400 = representatives_personIdSpace;
const representatives_personIdNull400 = representatives_personIdNull;
const representatives_accountRightCodeMissing400 = representatives_accountRightCodeMissing;
const representatives_accountRightCodeEmpty400 = representatives_accountRightCodeEmpty;
const representatives_accountRightCodeSpace400 = representatives_accountRightCodeSpace;
const representatives_accountRightCodeNull400 = representatives_accountRightCodeNull;
const representatives_accountRightCodeInvalid400 = representatives_accountRightCodeInvalid;
const representatives_limitsMissing400 = representatives_limitsMissing;
const representatives_limitsEmpty400 = representatives_limitsEmpty;
const representatives_limits_amountMissing400 = representatives_limits_amountMissing;
const representatives_limits_amountEmpty400 = representatives_limits_amountEmpty;
const representatives_limits_amount_amountMissing400 = representatives_limits_amount_amountMissing;
const representatives_limits_amount_amountEmpty400 = representatives_limits_amount_amountEmpty;
const representatives_limits_amount_amountSpace400 = representatives_limits_amount_amountSpace;
const representatives_limits_amount_amountNull400 = representatives_limits_amount_amountNull;
const representatives_limits_amount_currencyCodeMissing400 = representatives_limits_amount_currencyCodeMissing;
const representatives_limits_amount_currencyCodeEmpty400 = representatives_limits_amount_currencyCodeEmpty;
const representatives_limits_amount_currencyCodeSpace400 = representatives_limits_amount_currencyCodeSpace;
const representatives_limits_amount_currencyCodeNull400 = representatives_limits_amount_currencyCodeNull;
const representatives_limits_amount_currencyCodeInvalid400 = representatives_limits_amount_currencyCodeInvalid;
const representatives_limits_accountLimitTypeCodeMissing400 = representatives_limits_accountLimitTypeCodeMissing;
const representatives_limits_accountLimitTypeCodeEmpty400 = representatives_limits_accountLimitTypeCodeEmpty;
const representatives_limits_accountLimitTypeCodeSpace400 = representatives_limits_accountLimitTypeCodeSpace;
const representatives_limits_accountLimitTypeCodeNull400 = representatives_limits_accountLimitTypeCodeNull;
const representatives_limits_accountLimitTypeCodeInvalid400 = representatives_limits_accountLimitTypeCodeInvalid;
const accountNumbersMissing400 = accountNumbersMissing;
const accountNumbersEmpty400 = accountNumbersEmpty;
const accountNumbers_accountNumberMissing400 = accountNumbers_accountNumberMissing;
const accountNumbers_accountNumberEmpty400 = accountNumbers_accountNumberEmpty;
const accountNumbers_accountNumber_typeMissing400 = accountNumbers_accountNumber_typeMissing;
const accountNumbers_accountNumber_typeEmpty400 = accountNumbers_accountNumber_typeEmpty;
const accountNumbers_accountNumber_typeSpace400 = accountNumbers_accountNumber_typeSpace;
const accountNumbers_accountNumber_typeNull400 = accountNumbers_accountNumber_typeNull;
const accountNumbers_accountNumber_typeInvalid400 = accountNumbers_accountNumber_typeInvalid;
const accountNumbers_accountNumber_valueMissing400 = accountNumbers_accountNumber_valueMissing;
const accountNumbers_accountNumber_valueEmpty400 = accountNumbers_accountNumber_valueEmpty;
const accountNumbers_accountNumber_valueSpace400 = accountNumbers_accountNumber_valueSpace;
const accountNumbers_accountNumber_valueNull400 = accountNumbers_accountNumber_valueNull;
const accountNumbers_countryCodeMissing400 = accountNumbers_countryCodeMissing;
const accountNumbers_countryCodeEmpty400 = accountNumbers_countryCodeEmpty;
const accountNumbers_countryCodeSpace400 = accountNumbers_countryCodeSpace;
const accountNumbers_countryCodeNull400 = accountNumbers_countryCodeNull;
const accountNumbers_countryCodeInvalid400 = accountNumbers_countryCodeInvalid;
const accountNumbers_financialInstitutionIdMissing400 = accountNumbers_financialInstitutionIdMissing;
const accountNumbers_financialInstitutionIdEmpty400 = accountNumbers_financialInstitutionIdEmpty;
const accountNumbers_financialInstitutionId_typeMissing400 = accountNumbers_financialInstitutionId_typeMissing;
const accountNumbers_financialInstitutionId_typeEmpty400 = accountNumbers_financialInstitutionId_typeEmpty;
const accountNumbers_financialInstitutionId_typeSpace400 = accountNumbers_financialInstitutionId_typeSpace;
const accountNumbers_financialInstitutionId_typeNull400 = accountNumbers_financialInstitutionId_typeNull;
const accountNumbers_financialInstitutionId_typeInvalid400 = accountNumbers_financialInstitutionId_typeInvalid;
const accountNumbers_financialInstitutionId_valueMissing400 = accountNumbers_financialInstitutionId_valueMissing;
const accountNumbers_financialInstitutionId_valueEmpty400 = accountNumbers_financialInstitutionId_valueEmpty;
const accountNumbers_financialInstitutionId_valueSpace400 = accountNumbers_financialInstitutionId_valueSpace;
const accountNumbers_financialInstitutionId_valueNull400 = accountNumbers_financialInstitutionId_valueNull;
const limitsMissing400 = limitsMissing;
const limitsEmpty400 = limitsEmpty;
const limits_amountMissing400 = limits_amountMissing;
const limits_amountEmpty400 = limits_amountEmpty;
const limits_amount_amountMissing400 = limits_amount_amountMissing;
const limits_amount_amountEmpty400 = limits_amount_amountEmpty;
const limits_amount_amountSpace400 = limits_amount_amountSpace;
const limits_amount_amountNull400 = limits_amount_amountNull;
const limits_amount_currencyCodeMissing400 = limits_amount_currencyCodeMissing;
const limits_amount_currencyCodeEmpty400 = limits_amount_currencyCodeEmpty;
const limits_amount_currencyCodeSpace400 = limits_amount_currencyCodeSpace;
const limits_amount_currencyCodeNull400 = limits_amount_currencyCodeNull;
const limits_amount_currencyCodeInvalid400 = limits_amount_currencyCodeInvalid;
const limits_accountLimitTypeCodeMissing400 = limits_accountLimitTypeCodeMissing;
const limits_accountLimitTypeCodeEmpty400 = limits_accountLimitTypeCodeEmpty;
const limits_accountLimitTypeCodeSpace400 = limits_accountLimitTypeCodeSpace;
const limits_accountLimitTypeCodeNull400 = limits_accountLimitTypeCodeNull;
const limits_accountLimitTypeCodeInvalid400 = limits_accountLimitTypeCodeInvalid;

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
            body: validPayload200
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
            body: validPayload200
        }).then((response) => {
            expect(response.status).to.equal(405);
            expect(response.body).to.have.property("errors");
            expect(response.body).to.have.property("validationErrors");
        });
    });
})
