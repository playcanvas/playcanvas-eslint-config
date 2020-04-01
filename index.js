module.exports = {

  "parserOptions": {
    "ecmaVersion": 5,
    "sourceType": "script",
    "ecmaFeatures": {}
  },

  // Rules reference: https://eslint.org/docs/rules/
  "rules": {
    // Possible Errors
    "for-direction": "error",
    "getter-return": "error",
    "no-await-in-loop": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-console": "off",
    "no-constant-condition": [
      "error", {
        "checkLoops": false
      }
    ],
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": [
      "error", {
        "allowEmptyCatch": true
      }
    ],
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "off",
    "no-extra-parens": ["error", "functions"],
    "no-extra-semi": "error",
    "no-func-assign": "error",
    "no-invalid-regexp": "error",
    "no-inner-declarations": "error",
    "no-irregular-whitespace": "error",
    "no-obj-calls": "error",
    "no-prototype-builtins": "off",
    "no-regex-spaces": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "use-isnan": "error",
    "valid-typeof": "error",

    // Best Practices
    "accessor-pairs": "error",
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "class-methods-use-this": "off",
    "complexity": "off",
    "consistent-return": "off",
    "curly": "off",
    "default-case": "off",
    "dot-location": ["error", "property"],
    "dot-notation": "error",
    "eqeqeq": "off",
    "guard-for-in": "off",
    "no-alert": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-div-regex": "error",
    "no-else-return": "error",
    "no-empty-function": "off",
    "no-empty-pattern": "error",
    "no-eq-null": "off",
    "no-eval": "error",
    "no-extend-native": [
      "error", {
        "exceptions": [
          "String"
        ]
      }
    ],
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "off",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-multi-spaces": "off",
    "no-multi-str": "error",
    "no-new": "off", // Need to rework application.js to enable this
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "off",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-restricted-properties": "off",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "off", // Ideally should be error
    "no-useless-return": "error",
    "no-void": "error",
    "no-warning-comments": "off", // Ideally should be warn
    "no-with": "error",
    "prefer-promise-reject-errors": "error",
    "radix": "error",
    "require-await": "error",
    "vars-on-top": "off",
    "wrap-iife": "off",
    "yoda": "error",

    // Variables
    "init-declarations": "off",
    "no-catch-shadow": "error",
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-restricted-globals": "off",
    "no-shadow": "off",
    "no-shadow-restricted-names": "error",
    "no-undef": "off",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-unused-vars": [
      "warn", {
        "args": "none"
      }
    ],
    "no-use-before-define": ["error", { "functions": false }],

    // Stylistic Issues
    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": "off",
    "block-spacing": "error",
    "brace-style": "error",
    "camelcase": "off",
    "capitalized-comments": "off",
    "comma-dangle": ["error", "never"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "consistent-this": "off",
    "eol-last": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "func-name-matching": "error",
    "func-names": "off",
    "func-style": "off",
    "function-paren-newline": "off",
    "id-blacklist": "off",
    "id-length": "off",
    "id-match": "off",
    "implicit-arrow-linebreak": "off",
    "indent": [
      "error", 4, {
        "SwitchCase": 1,
        "CallExpression": {
          "arguments": "first"
        },
        "ignoreComments": true
      }
    ],
    "jsx-quotes": "off",
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "line-comment-position": "off",
    "linebreak-style": "off",
    "lines-around-comment": "off",
    "lines-between-class-members": ["error", "always"],
    "multiline-comment-style": ["warn", "separate-lines"],
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-bitwise": "off",
    "no-continue": "off",
    "no-inline-comments": "off",
    "no-lonely-if": "off",
    "no-mixed-spaces-and-tabs": "error",
    "no-multiple-empty-lines": ["error", { "max": 2, "maxBOF": 0, "maxEOF": 0 }],
    "no-tabs": "error",
    "no-ternary": "off",
    "no-trailing-spaces": "error",
    "no-underscore-dangle": "off",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "object-curly-newline": ["error", { "consistent": true }],
    "object-curly-spacing": ["error", "always"],
    "operator-assignment": ["error", "always"],
    "operator-linebreak": ["error", "after"],
    "quotes": ["off", "single"],
    "semi": ["error", "always"],
    "semi-spacing": [ "error", { "before": false, "after": true } ],
    "semi-style": ["error", "last"],
    "space-before-function-paren": ["error", { "anonymous": "always", "named": "never" }],
    "space-infix-ops": [
      "error", {
        "int32Hint": false
      }
    ],
    "space-unary-ops": [
      "off", {
        "words": true,
        "nonwords": false,
        "overrides": {
        }
    }],
    "spaced-comment": ["error", "always", { "exceptions": ["/"] }],
    "switch-colon-spacing": ["error", {"after": true, "before": false}],
    "template-tag-spacing": "error",
    "unicode-bom": ["error", "never"],
    "wrap-regex": "off",

    // JSDoc rules
    "jsdoc/check-access": "error",
    "jsdoc/check-alignment": "error",
    "jsdoc/check-examples": "error",
    "jsdoc/check-indentation": "off",
    "jsdoc/check-param-names": "off",
    "jsdoc/check-property-names": "error",
    "jsdoc/check-syntax": "error",
    "jsdoc/check-tag-names": [
      "error", {
        "definedTags": ["component", "field"]
      }
    ],
    "jsdoc/check-types": "error",
    "jsdoc/check-values": "error",
    "jsdoc/empty-tags": "error",
    "jsdoc/implements-on-classes": "error",
    "jsdoc/match-description": "off",
    "jsdoc/newline-after-description": "error",
    "jsdoc/no-types": "off", // Need types on param tags
    "jsdoc/no-undefined-types": [
      "error", {
        "definedTypes": [
          "pc",
          "ArrayBuffer",
          "Float32Array",
          "Int16Array",
          "Int32Array",
          "Int8Array",
          "Uint16Array",
          "Uint32Array",
          "Uint8Array",
          "Uint8ClampedArray",
          "VRDisplay",
          "VRDisplayCapabilities",
          "VRFrameData"
        ]
      }
    ],
    "jsdoc/require-description": "off",
    "jsdoc/require-description-complete-sentence": "off",
    "jsdoc/require-example": "off",
    "jsdoc/require-file-overview": "off",
    "jsdoc/require-hyphen-before-param-description": ["error", "always"],
    "jsdoc/require-jsdoc": "off", // Not everything needs to be documented
    "jsdoc/require-param": "error",
    "jsdoc/require-param-description": "error",
    "jsdoc/require-param-name": "error",
    "jsdoc/require-param-type": "error",
    "jsdoc/require-property": "error",
    "jsdoc/require-property-description": "error",
    "jsdoc/require-property-name": "error",
    "jsdoc/require-property-type": "error",
    "jsdoc/require-returns": "error",
    "jsdoc/require-returns-check": "error",
    "jsdoc/require-returns-description": "error",
    "jsdoc/require-returns-type": "error",
    "jsdoc/valid-types": "off"
  },

  "plugins": [
    "jsdoc"
  ],

  "env": {
    "browser": true,
    "node": true
  }

};