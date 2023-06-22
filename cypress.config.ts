import { defineConfig } from "cypress";

module.exports = defineConfig({
  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
    "configFile": "reporter-config.json"
  },
  env: {
    url: 'https://nikhilp-prod1.inspify.com/',
    grepFilterSpecs: true,
    grepFilterTests: true,
    grepOmitFiltered: true
  },
  e2e: {
    testIsolation: false,
    defaultCommandTimeout: 35000,
    baseUrl: 'https://nikhilp-prod1.inspify.com',

    //pageLoadTimeout : 120000,
    retries: {
      "runMode": 1,
      "openMode": 1
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});
