const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://person-api.sandbox.tuumplatform.com",
  },
  defaultCommandTimeout: 10000,
  fixturesFolder: false
});
