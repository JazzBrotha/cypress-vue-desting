# cypress-vue-testing [![Build Status](https://travis-ci.org/JazzBrotha/cypress-vue-testing.svg?branch=master)](https://travis-ci.org/JazzBrotha/cypress-vue-testing) [![codecov](https://codecov.io/gh/JazzBrotha/cypress-vue-testing/branch/master/graph/badge.svg)](https://codecov.io/gh/JazzBrotha/cypress-vue-testing) [![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/#/projects/yf7npb/runs) [![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)
This project uses a `Vue.js` open source application to write basic `unit`, `integration`, and `e2e` tests in `Mocha` and `Cypress`. A link to the original repo can be found [here](https://github.com/codyseibert/tab-tracker).

## Setup
Please note that some tests use real back end requests. To start the server, navigate into the `server` folder and run `yarn start`.

Navigate to client folder
```bash
cd client
```

To run all tests
```bash
yarn test
```

To run e2e tests
```bash
yarn e2e
```

To run unit and integration tests
```bash
yarn unit
```
