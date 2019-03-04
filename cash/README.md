# cash

> Introduction to cash package

Cash is an absurdly small jQuery alternative for modern browsers (IE10+) that provides jQuery-style syntax for manipulating the DOM. Utilizing modern browser features to minimize the codebase, developers can use the familiar chainable methods at a fraction of the file size. 100% feature parity with jQuery isn't a goal, but Cash comes helpfully close, covering most day to day use cases.


## Example

To run the default mode of the application go to the folder where cash.js is and open a terminal and run the command :

    node cash.js

## Comparison

| Size               | Cash        | Zepto 1.2.0 | jQuery 3.3.1 |
| ------------------ | ----------- | ----------- | ------------ |
| Uncompressed       | **28.7 KB** | 58.7 KB     | 271 KB       |
| Minified           | **12.7 KB** | 26 KB       | 87 KB        |
| Minified & Gzipped | **4.5 KB**  | 9.8 KB      | 30.3 KB      |

An **85%** gain in size reduction compared to jQuery. If you need a smaller bundle, we support [partial builds](https://github.com/kenwheeler/cash/blob/master/docs/partial_builds.md) too.

| Features                 | Cash                         | Zepto 1.2.0                    | jQuery 3.3.1             |
| ------------------------ | ---------------------------- | ------------------------------ | ------------------------ |
| Supports Modern Browsers | ✔                            | ✔                              | ✔                        |
| Actively Maintained      | ✔                            | \                          |✔                        |
| Namespaced Events        | ✔                            | \                             |✔                        |
| Modern Codebase          | ✔ (TypeScript)               | \                             |\                       |
| TypeScript Types         | ✔ (generated from code)      | ! (via DefinitelyTyped)       |! (via DefinitelyTyped) |
| Partial Builds           | ✔ (can exclude single files) | ! (can exclude whole modules) |\                        |

## Usage

Get Cash from [CloudFlare](https://cdnjs.cloudflare.com/ajax/libs/cash/3.0.0-beta.3/cash.min.js) or [jsDelivr](https://cdn.jsdelivr.net/npm/cash-dom@3.0.0-beta.3/dist/cash.min.js) and use it like this:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/cash/3.0.0-beta.3/cash.min.js"></script>
<script>
  $(function () {
    $('html').addClass ( 'dom-loaded' );
    $('<footer>Appended with Cash</footer>').appendTo ( document.body );
  });
</script>
```