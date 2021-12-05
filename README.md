# PlayCanvas ESLint Config

ESLint configuration developed by the PlayCanvas team and leveraged by many PlayCanvas-related projects, including the [PlayCanvas Engine][engine]. However, you can use it for any JavaScript-based project if you approve of the PlayCanvas coding style.

The configuration is defined in [`index.js`][index]. It configures ESLint's rules in the same order as they are enumerated [here][rules]. It also configures rules for checking JSDoc comments using the ESLint plugin [`eslint-plugin-jsdoc-rules`][jsdoc-plugin].

The configuration attempts to enable as many rules as possible, particularly those categorized as 'recommended' by ESLint.

[engine]: https://github.com/playcanvas/engine
[index]: https://github.com/playcanvas/playcanvas-eslint-config/blob/master/index.js
[rules]: https://eslint.org/docs/rules/
[jsdoc-plugin]: https://github.com/gajus/eslint-plugin-jsdoc
