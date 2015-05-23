# PostCSS Verthorz [![Build Status][ci-img]][ci]

[PostCSS] plugin to add vertical and horizontal spacing rules.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/davidhemphill/postcss-verthorz.svg
[ci]:      https://travis-ci.org/davidhemphill/postcss-verthorz

```css
.foo {
    padding-vert: 2rem;
    margin-horz: auto;
}
```

```css
.foo {
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
}
```

## Usage

```js
postcss([ require('postcss-verthorz') ])
```

See [PostCSS] docs for examples for your environment.
