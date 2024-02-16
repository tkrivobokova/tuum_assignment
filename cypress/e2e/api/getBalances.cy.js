const accountId  = "ID-2000";
const currencyUSD = "USD";
const currencyInvalid = "PEW";

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
    it("should return 200 when getting account balance information based on accountId", () => {
        cy.request({
            method: "GET",
            url: "https://account-api.sandbox.tuumplatform.com/api/v1/accounts/" + accountId + "/balances",
            headers: headers

        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property("data");
            expect(response.body).to.have.property("errors").that.equal(null);
            expect(response.body).to.have.property("validationErrors").that.equal(null);
            response.body.data.forEach((item) => {
                expect(item.accountId).to.equal(accountId);
            })
        });
    });

    it("should return 200 when getting account balance information based on accountId and currencyCode", () => {
        cy.request({
            method: "GET",
            url: "https://account-api.sandbox.tuumplatform.com/api/v1/accounts/" + accountId + "/balances?currencyCode=" + currencyUSD,
            headers: headers

        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property("data");
            expect(response.body).to.have.property("errors").that.equal(null);
            expect(response.body).to.have.property("validationErrors").that.equal(null);
            response.body.data.forEach((item) => {
                expect(item.accountId).to.equal(accountId);
                expect(item.currencyCode).to.equal(currencyUSD);
            })
        });
    });

    // status code 400
    it("should return 400 if currencyCode is not supported", () => {
        cy.request({
            method: "GET",
            url: "https://account-api.sandbox.tuumplatform.com/api/v1/accounts/" + accountId + "/balances?currencyCode=" + currencyInvalid,
            headers: headers

        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.have.property("errors").to.include("err.currencyCodeNotSupported");
            expect(response.body).to.have.property("validationErrors");
        });
    });

    // status code 401
    it("should return 401 if user is not logged in", () => {
        cy.request({
            method: "GET",
            url: "https://account-api.sandbox.tuumplatform.com/api/v1/accounts/" + accountId + "/balances",
            headers: {
                "x-channel-code": "SYSTEM",
                "x-tenant-code": "MB"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(401);
        });
    });

    //status code 404
    it("should return 404 if URL is wrong", () => {
        cy.request({
            method: "GET",
            url: "https://account-api.sandbox.tuumplatform.com/api/v1/accounts/" + accountId + "/balance",
            headers: headers,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(404);
            expect(response.body).to.have.property("error").that.equal("Not Found");
            expect(response.body).to.have.property("path").that.equal("/api/v1/accounts/" + accountId + "/balance");
        });
    });

    // status code 405
    it("should return 405 if PATCH method is used", () => {
        cy.request({
            method: "PATCH",
            url: "https://account-api.sandbox.tuumplatform.com/api/v1/accounts/" + accountId + "/balances",
            headers: headers,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(405);
            expect(response.body).to.have.property("errors").to.include("err.httpMethodNotAllowed");
            expect(response.body).to.have.property("validationErrors");
        });
    });

    it("should return 405 if POST method is used", () => {
        cy.request({
            method: "POST",
            url: "https://account-api.sandbox.tuumplatform.com/api/v1/accounts/" + accountId + "/balances",
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
            url: "https://account-api.sandbox.tuumplatform.com/api/v1/accounts/" + accountId + "/balances",
            headers: headers,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(405);
            expect(response.body).to.have.property("errors").to.include("err.httpMethodNotAllowed");
            expect(response.body).to.have.property("validationErrors");
        });
    });

    it("should return 405 if PUT method is used", () => {
        cy.request({
            method: "PUT",
            url: "https://account-api.sandbox.tuumplatform.com/api/v1/accounts/" + accountId + "/balances",
            headers: headers,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(405);
            expect(response.body).to.have.property("errors").to.include("err.httpMethodNotAllowed");
            expect(response.body).to.have.property("validationErrors");
        });
    });
})
