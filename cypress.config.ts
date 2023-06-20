import { defineConfig } from "cypress";

module.exports = defineConfig({
  "reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "configFile": "reporter-config.json"
    },
  env: {
    url: 'https://nikhilp-prod1.inspify.com/hub#/sessions',
    "grepFilterSpecs": true,
    "grepFilterTests": true,
    "grepOmitFiltered": true,
  },
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});
