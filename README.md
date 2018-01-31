# cypress-vue-testing [![Build Status](https://travis-ci.org/JazzBrotha/cypress-vue-testing.svg?branch=master)](https://travis-ci.org/JazzBrotha/cypress-vue-testing) [![codecov](https://codecov.io/gh/JazzBrotha/cypress-vue-testing/branch/master/graph/badge.svg)](https://codecov.io/gh/JazzBrotha/cypress-vue-testing) [![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/#/projects/yf7npb/runs) [![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)
Simple testing in `Vue.js` using `Cypress` for `e2e` testing and Mocha for `unit` and `integration` testing.

## Setup
Navigate to client folder
```bash
cd client
```

To run both `Cypress` and `Mocha`
```bash
yarn test
```

To run only `Cypress`
```bash
yarn e2e
```

To run only `Mocha`
```bash
yarn unit
```

To run `Mocha` with watch
```bash
yarn unit-watch
```

Some test use real backend requests. To start the server navigate into `server` folder and run `yarn start`.