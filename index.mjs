// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log2@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-base2-exponent@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-base2-exponent-subnormal@v0.2.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.1-esm/index.mjs";function a(a){var l,j;return s(a)||t(a)||0===a?a:(a<0?(a=-a,l=-1):l=1,(j=m(a))===r?a:(j=-1===l?i(j):n(j))>d?o:l*e(2,j))}export{a as default};
//# sourceMappingURL=index.mjs.map
