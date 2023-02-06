module.exports = {
    "extends": [
        "airbnb-typescript",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jest/recommended",
        "prettier",
        "plugin:prettier/recommended"
    ],
    "plugins": ["react", "@typescript-eslint", "jest", "import"],
    "parser": "@typescript-eslint/parser",
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
        "project": "./tsconfig.eslint.json"
    },
    "rules": {
        "prettier/prettier": "error",
        "no-console": "off"
    }
}
