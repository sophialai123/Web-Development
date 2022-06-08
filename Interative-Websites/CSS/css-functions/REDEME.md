#CSS FUNCTIONS

### [ The clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clampfunction) takes three parameters in a specific order: clamp(MIN, VAL, MAX)

1. The first argument specifies the minimum value. If the preferred value, given as the second argument, is less than this value, then the minimum value will be used. 
   
2. The second argument specifies the preferred value. This value is used as long as it is greater than the value of the first argument (lower bound) and less than the value of the third argument (upper bound). 
   
3. The third argument specifies the maximum value. This value is the largest value that the property will be set to.


---
### Color Functions,the main color functions are:
### 

- The rgb() function which defines color using the standard RGB (red, green, and blue) model.
- The rgba() function, which is similar to the rgb() function except it also defines an alpha channel to specify the color’s opacity level.
- The hsl() function. This function defines color using hue, saturation and lightness.
- The hsla() function. Again, this function is similar to the hsl() function except it also defines an alpha channel that specifies the color’s opacity level.


---
### [Filter Functions](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
- The brightness() function for the filter and backdrop-filter property to affect an element’s overall brightness by applying a linear multiplier to it. The brightness() function takes a single argument for the amount, which can be either a number or percentage.
  
- The blur() function applies a Gaussian blur to a specified element. The blur() function takes a single argument for the radius of the blur specified as a length. The argument of this function cannot be unitless unless a blur amount of 0 is being set.

- The drop-shadow() function applies a drop shadow effect to the desired element.

This function applies a drop shadow effect to the desired element. Take a look at the syntax below:
```
drop-shadow(offset-x offset-y blur-radius color)
```
  - Both offset-x and offset-y are required arguments that determine the horizontal and vertical offset respectively.
  - While blur-radius is an optional argument that determines the shadow’s blur radius—the larger the value, the more blurred the shadow.
  - Finally, the color argument is also optional and determines the shadow’s color.

---
### Transform Functions
- The scale() function resizes an element, both horizontally and vertically, on a 2D plane. If only one argument is given, scale(2) for instance, then the element will grow proportionally on both the x and y-axis. When two arguments are provided, the first argument scales along the x-axis, and the second scales along the y-axis. If you only want to scale an element on one of the two axes, either the scaleX() or the scaleY() function can be used.

- The rotate() function can be used for the transform property to rotate an element around a fixed point on a given 2D plane. The function accepts a single argument for the angle, which must be in degrees specified with the deg unit.
  
- The translate() function moves an element from its initial position to another position on the page specified as the function’s arguments. The function can accept either one or two arguments—if one argument is provided, then the function will translate the element along the only x-axis by the specified amount. If two arguments are given, the element translates along the x-axis by the amount specified by the first argument and along the y-axis by the amount specified as the second argument.

--- 
## Review :

- Functions are a type of CSS value that is inserted in place of a hardcoded value on a CSS property
- The url() function is used to load resources into the stylesheet.
You can use the calc() function to perform simple mathematical operations on elements.
- The min() function can be used to select the smallest value from a range of values and set that value on a property.
- The max() function can be used to select the largest value from a range of values and set that value on a property.
- You can use the clamp() function to ensure property value scales up and down while staying between an upper and lower bound.
- Color values that are fully opaque can be set using the rgb() and hsl() functions.
- Color values that need a varying level of alpha can be set using the rgba() and hsla() functions.
- You can use filter functions to change the appearance of input images and elements.
- The drop-shadow(), blur(), and brightness() functions each perform different kinds of element filtering.
- You can use transformation functions to manipulate image positioning, scale, rotation, and more.
- The scale(), rotate() and translate() functions each allow for specific kinds of transformation.