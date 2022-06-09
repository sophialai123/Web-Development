## Accessibility Across Mediums

- One way to do this is to use media queries, specifically the @media print query:
  
```
@media print {
  nav {
    display: none;
  }
}
```

- To expose an href in printed form, the following code can be used:
```
@media print {
  a[href^="http"]:after {
    content: " (" attr(href) ")";
  }
}

```

---
### [Testing for Web Accessibility](https://a11y.coffee/start-testing/)
1. Open your inspect tool chrome
2. Select Lighthourse
3. Tick categories
4. Analyze page report
  
