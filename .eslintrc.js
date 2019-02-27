module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/forbid-prop-types": 0,
    "no-underscore-dangle": 0,
    "no-console": 0,
    "no-use-before-define": 0,
    },
    "env" : {
    "es6" : true,
    "node":true,
    "jest":true,
    "browser":true
    },
    };