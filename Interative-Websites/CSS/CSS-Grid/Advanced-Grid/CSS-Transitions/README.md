# [CSS transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)


1. Duration is specified in seconds or milliseconds, such as 3s, 0.75s, 500ms. The default value is 0s, or instantaneous, as if there is no transition


2. Different properties transition in different ways, for example:

 - Color values, like color and background-color, will blend to a new color.

 - Length values like font-size, width, and height will grow or shrink.

3. Timing Function: 
 - ease-in — starts slow, accelerates quickly, stops abruptly
  
 - ease-out — begins abruptly, slows down, and ends slowly
  
 - ease-in-out — starts slow, gets fast in the middle, and ends slowly
  
 - linear — constant speed throughout
   

4. Delay - the default value for transition-delay is 0s.

---

## Transition shorthand: 
    transition-property, transition-duration, transition-timing-function, transition-delay.

```

transition-property: color;
transition-duration: 1.5s;
transition-timing-function: linear;
transition-delay: 0.5s;


<!-- shorthand -->
transition: color 1.5s linear 0.5s;

```
---

## Combinations 
### To combine transitions, add a comma (,) before the semicolon (;) in your rule. After the comma, use the same shorthand syntax.

```
transition: color 1s linear,
font-size 750ms ease-in 100ms;

<!-- font size transitions over 750 milliseconds with an ease-in timing and a 100 millisecond delay. -->
```
---
## **All**--
### This will apply the same values to all properties. To effect this, you can use all as a value for transition-property.

```
transition: all 1.5s linear 0.5s;

```