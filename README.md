
<!--#echo json="package.json" key="name" underline="=" -->
unwrap-single-prop
==================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
If your container element holds just a single property, and its key is named
as you suspect it may, return just that property&#39;s value. Otherwise,
return the original container. Useful for `require(…).default` situations.
<!--/#echo -->



API
---

This module exports one function that also carries some convenience functions:

### unwrapSingleKey(k, x)

If `x` is a container that only holds a single property named `k`,
return its value (i.e. `x[k]`).
Otherwise, return the original container (`x`).

* Key names are expected as strings.
  Giving a non-string will usually fail the name comparison.
* However, there is a special case for the number `0`.
  When `k === 0` (which implies `k !== '0'`),
  the container's key names are ignored.
  Instead, the criterion becomes whether the container has `x.length === 1`,
  in which case `x[0]` is returned even if it is `undefined`.



### unwrapSingleKey.len1(x)

Safely check (and return) whether `x.length === 1`.



### unwrapSingleKey.df(x)

Pre-configured shorthand for the popular case `k === 'default'`.
This way, when you need this in multiple modules, you can save the effort
and memory of declaring it in each one.



### unwrapSingleKey.default

Alias for `unwrapSingleKey`, so you can safely
`require('unwrap-single-prop').default` without worrying whether the need for
`.default` may become obsolete in future versions of your build system.






Usage
-----

See [test.usage.mjs](test.usage.js).



Known issues
------------

* Needs more/better tests and docs.





<!--#toc stop="scan" -->

&nbsp;


License
-------
<!--#echo json="package.json" key="license" -->
ISC
<!--/#echo -->
