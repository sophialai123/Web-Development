# BROWSER COMPATIBILITY
### [Vendor Prefixes ](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix)
#### Vendor prefixes are prefixes for property names that were developed as a way of testing new CSS features or standards before browsers fully supported them. Common vendor prefixes include:

- -webkit- for Chrome, Safari, newer versions of Opera, and almost all iOS browsers, including Firefox for iOS
- -moz- for Firefox
- -ms- for Internet Explorer and Microsoft Edge
- -o- for old pre-WebKit versions of Opera


#### Browsers adopt features at different rates—for newer CSS features, you may need to include prefixed property names alongside.

```
.tilted {
  -webkit-transform: rotate(15deg);
  -moz-transform: rotate(15deg);
  -ms-transform: rotate(15deg);
  -o-transform: rotate(15deg);
  transform: rotate(15deg);
}
```

```
strong{

  /* Set background-clip to text with approporate prefix for Chrome */

 -webkit-background-clip:text;

}
  
```

### You can also use tools such as [Autoprefixer](https://github.com/postcss/autoprefixer) to automatically include all vendor prefixes for the features that require them.


--- 

### [Polyfills](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill) JavaScript codes that allow older browsers to behave as though they understand more advanced features than they actually do.

```
Inside the <head> element of index.html, add the following <script> element:

<script src="https://polyfill.io/v3/polyfill.min.js"></script>

```


---
 ### For a more comprehensive solution, we can use tools such as [Modernizr](https://github.com/Modernizr/Modernizr) or [Polyfill.io](https://github.com/financial-times/polyfill-service) to automatically identify and provide all of the polyfills that our website might need, ensuring that it can run as smoothly as possible on older browsers.


 ---

 ### We can check whether a CSS feature is available on specific browsers using tools like [caniuse.com](https://caniuse.com/).

### Browsers have default styles which we can check using resources like [browserdefaultstyles.com](https://browserdefaultstyles.com/).

---
# [CSS Feature Queries](https://www.codecademy.com/courses/learn-intermediate-css/articles/css-feature-queries)

- [@supports CSS at-rule ](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)
- [CSS Conditional Rules](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Conditional_Rules)