module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jquery": true,
    },
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "AgoraRTC": "readonly",
        "AgoraRTS": "readonly",
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "semi": ["warn", "never"],
        "quotes": [1, "double"],
        "no-unused-vars": "warn",
        "no-use-before-define": "warn",
        "no-unused-vars": 0,
    }
};