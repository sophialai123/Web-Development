# **CSS GRID**

### Flexbox is mostly useful for positioning items in a one-dimensional layout, CSS grid is most useful for two-dimensional layouts, providing many tools for aligning and moving elements across both rows and columns.
---

## **Grid  container(parent) layouts**:
- grid-template-columns
- grid-template-rows
- grid-template (shorthand for rows / columns)
- row-gap / column-gap / gap (row gap)
- [grid-template-areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)
  
---

### *Fraction* --- CSS Grid introduced a new relative sizing unit — fr, like fraction. We can define the size of columns and rows as a fraction of the grid’s length and width:
```
.grid {
  display: grid;
  width: 1000px; #(split colmuns)
  height: 400px;  #(split rows)
  grid-template: 2fr 1fr 1fr / 1fr 3fr 1fr;
}

```
---
### *Repeat* --- defines the number of rows and columns in a grid can take a function as a value
```
.grid {
  display: grid;
  width: 300px;
  grid-template-columns: repeat(3, 100px);
}
```
---
### *Minmax* --- resize based on the size of your web browser.
```
.grid {
  display: grid;
  grid-template-columns: 100px minmax(100px, 500px) 100px;
}

#The second column will always be between 100 and 500 pixels wide.
```

---
## **Grid  items (children) layouts**:
- grid-row-start / grid-row-end
- grid-column-start / grid-column-end
- grid-area
  
---
### *Multiple Row Items* ---The value for grid-row-start should be the row at which you want the grid item to begin. The value for grid-row-end should be one greater than the row at which you want the grid item to end. For example, if a grid has 5 rows, the grid row lines range from 1 to 6.

```
.item {
  grid-row-start: 1;
  grid-row-end: 6;
}


<!-- Grid Row for shorthand  -->
.item {
  grid-row: 1 / 6;
}
```
---

### *Grid Column* --- can use the keyword *span* to start or end a column or row

```
<!-- begin in column four and take up two columns of space -->

.item {
  grid-column: 4 / span 2;
}

```

---
### *Grid-area* ---  will interpret those values:
1. grid-row-start
2. grid-column-start
3. grid-row-end
4. grid-column-end
      
```
.item {
  grid-area: 2 / 3 / 4 / span 5;
}
```


---
**Review**
- grid-template-columns defines the number and sizes of the columns of the grid
  
- grid-template-rows defines the number and sizes of the rows of the grid
  
- grid-template is a shorthand for defining both grid-template-columns and grid-template-rows in one line
  
- row-gap puts blank space between the rows of the grid
 
- column-gap puts blank space between the columns of the grid
 
- gap is a shorthand for defining both row-gap and column-gap in one line
  
- grid-row-start and grid-row-end makes elements span certain rows of the grid
  
- grid-column-start and grid-column-end makes elements span certain columns of the grid
  
- grid-area is a shorthand for - grid-row-start, grid-column-start, - grid-row-end, and grid-column-end, all in one line
