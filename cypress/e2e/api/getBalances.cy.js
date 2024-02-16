let jwtToken;
let headers;
const accountId  = "ID-2000";
const currencyUSD = "USD";
const currencyEUR = "EUR";

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

})
