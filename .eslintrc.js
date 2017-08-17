module.exports = {
    "globals": {
        "myLib": true,
    },
    "env": {
        "es6": true,
        "node": true,
        "browser": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "valid-jsdoc": 2,
        "array-callback-return": 2,
        "block-scoped-var": 2,
        "curly": ["error", "all"],
        "dot-location": 2,
        "dot-notation": 2,
        "eqeqeq": 2,
        "guard-for-in": 2,
        "no-caller": 2,
        "no-div-regex": 2,
        "no-empty-function": 2,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-extra-label": 2,
        "no-implied-eval": 2,
        "no-invalid-this": 2,
        "no-labels": 2,
        "no-return-assign": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-throw-literal": 2,
        "no-unmodified-loop-condition": 2,
        "no-with": 2,
        "radix": ["error", "always"],
        "vars-on-top": 2,
        "wrap-iife": ["error", "any"],
        "no-shadow": 2,
        "camelcase": 1,
        "no-label-var": 2,
        "no-shadow-restricted-names": 2,
        "no-use-before-define": 2,
        "callback-return": 2,
        "no-path-concat": 1,
        "no-new-require": 1,
        "no-mixed-requires": 1,
        "block-spacing": ["error", "always"],
        "brace-style": ["error", "1tbs"],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "comma-style": ["error", "last"],
        "comma-dangle": ["warn", "always-multiline"],
        "max-len": ["warn", 160],


    }
};