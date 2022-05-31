# **Grid Template Areas**
### Grid-template-areas property allows you to **name sections** of your web page to use as values in the grid-row-start, grid-row-end, grid-column-start,grid-column-end, and grid-area properties. This property is declared on *grid containers*.

```

<!-- HTML -->

<div class="container">
  <header>Welcome!</header>
  <nav>Links!</nav>
  <section class="info">Info!</section>
  <section class="services">Services!</section>
  <footer>Contact us!</footer>
</div>


<!-- CSS grid-template-areas -->
.container {
  display: grid;
  max-width: 900px;
  position: relative;
  margin: auto;
  grid-template-areas: "head head"
                       "nav nav" 
                       "info services"
                       "footer footer";
  grid-template-rows: 300px 120px 800px 120px;
  grid-template-columns: 1fr 3fr; 
}
 

header {
  grid-area: head;
} 
 
nav {
  grid-area: nav;
} 
 
.info {
  grid-area: info;
} 
 
.services {
  grid-area: services;
}
 
footer {
  grid-area: footer;
} 
```
---

## **Overlapping Elements**
### When overlapping elements, it is generally easiest to use the grid-area property with grid row names. Remember that grid-area will set the starting and ending positions for both the rows and columns of an item.
---

## **justify-items** is a property that positions grid items along the inline, or row, axis, from *left to right* across the web page. It declared on *grid containers*.
- start — aligns grid items to the left side of the grid area
- end — aligns grid items to the right side of the grid area
- center — aligns grid items to the center of the grid area
- stretch — stretches all items to fill the grid area

---
## **Justify Content** is used to position the entire grid along the row axis. This property is declared on *grid containers*.
- start — aligns the grid to the left side of the grid container
  
- end — aligns the grid to the right side of the grid container
  
- center — centers the grid horizontally in the grid container
  
- stretch — stretches the grid items to increase the size of the grid to expand horizontally across the container
  
- space-around — includes an equal amount of space on each side of a grid element, resulting in double the amount of space between elements as there is before the first and after the last element
  
- space-between — includes an equal amount of space between grid items and no space at either end
  
- space-evenly — places an even amount of space between grid items and at either end

---

## **Align Items** is to position grid items from top to bottom!
- start — aligns grid items to the top side of the grid area
  
- end — aligns grid items to the bottom side of the grid area
  
- center — aligns grid items to the center of the grid area

- stretch — stretches all items to fill the grid areas.
---

## **align-content** positions the rows along the column axis, or from top to bottom, and is declared on grid containers.

- start — aligns the grid to the top of the grid container
  
- end — aligns the grid to the bottom of the grid container
  
- center — centers the grid vertically in the grid container
  
- stretch — stretches the grid items to increase the size of the grid to expand vertically across the container
  
- space-around — includes an equal amount of space on each side of a grid element, resulting in double the amount of space between elements as there is before the first and after the last element
  

- space-between — includes an equal amount of space between grid items and no space at either end
space-evenly — places an even amount of space between grid items and at either end
---
## CSS Grid provides two properties to specify the size of grid tracks added implicitly: grid-auto-rows and grid-auto-columns. These properties are declared on grid containers.

1. grid-auto-rows specifies the height of implicitly added grid rows. 
   
2. grid-auto-columns specifies the width of implicitly added grid columns.
   
--- 
## **Grid Auto Flow** specifies whether new elements should be added to rows or columns, and is declared on grid container.
- row — specifies the new elements should fill rows from left to right and create new rows when there are too many elements (default).
  
- column — specifies the new elements should fill columns from top to bottom and create new columns when there are too many elements.
  
- dense — this keyword invokes an algorithm that attempts to fill holes earlier in the grid layout if smaller elements are added

