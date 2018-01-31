# cypress-vue-testing [![Build Status](https://travis-ci.org/JazzBrotha/cypress-vue-testing.svg?branch=master)](https://travis-ci.org/JazzBrotha/cypress-vue-testing) [![codecov](https://codecov.io/gh/JazzBrotha/cypress-vue-testing/branch/master/graph/badge.svg)](https://codecov.io/gh/JazzBrotha/cypress-vue-testing) [![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/#/projects/yf7npb/runs) [![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)
This project uses a `Vue.js` open source application to write basic `unit`, `integration`, and `e2e` tests in `Mocha` and `Cypress`. A link to the original repo can be found [here](https://github.com/codyseibert/tab-tracker).

## Setup
Please note that some tests use real back end requests. To start the back end server navigate into the `server` folder and install all dependencies by running `yarn`. Then, run `yarn seed` to seed the database and run `yarn start` to start the server.

Navigate to client folder
```bash
cd client
```

Install all dependencies
```bash
yarn
```

To run all tests
```bash
yarn test
```

To run e2e tests
```bash
cd client && yarn start
```
```bash
yarn e2e
```

To run unit and integration tests
```bash
yarn unit
```
