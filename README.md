# PostCSS Verthorz [![Build Status][ci-img]][ci]

[PostCSS] plugin to add vertical and horizontal spacing shorthand.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/davidhemphill/postcss-verthorz.svg
[ci]:      https://travis-ci.org/davidhemphill/postcss-verthorz

## Examples

### Shorthand `vert` and `horz` declarations

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

### Even shorter shorthand declarations

```css
.bar {
    ph: 30px;
    mv: 100px;
}
```

```css
.bar {
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 100px;
    margin-bottom: 100px;
}
```

## Usage

```js
postcss([ require('postcss-verthorz') ])
```

See [PostCSS] docs for examples for your environment.