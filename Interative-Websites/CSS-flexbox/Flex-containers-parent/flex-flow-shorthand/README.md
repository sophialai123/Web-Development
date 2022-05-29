## **flex-flow shorthand**

- The flex-flow property is declared on flex containers.
  
- flex-flow property is used to declare both the flex-wrap and flex-direction properties in one line.


```
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}


<!-- Flex-flow shorthand -->
.container {
  display: flex;
  flex-flow: column wrap;
}

```