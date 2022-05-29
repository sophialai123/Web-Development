## **Flex-grow**
- Default value of flex-grow is 0.
  
- Is determined by heights and widths.
  
- The flex-grow property allows us to specify if items should grow to fill a container and also which items should grow proportionally 
more or less than others.

---

## **Flex-shrink**
- Default value of flex-shrink is 1.

- The flex-shrink property can be used to specify which elements will shrink and in what proportions. 

---
#### Margins are unaffected by flex-grow and flex-shrink.

#### Minimum and maximum widths will take precedence over flex-grow and flex-shrink. As with flex-grow, flex-shrink will only be employed if the parent container is too small or the browser is adjusted.

---

## **Flex-basis**
-  Allows us to specify the **width** of an item **before** it stretches or shrinks.

---
### **Flex - shorthand**
- The flex property allows you to declare flex-grow, flex-shrink, and flex-basis all in one line.
  
- For example:
```
.big {
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 150px;
}

.big{flex: 2 1 150px;}

 ```



