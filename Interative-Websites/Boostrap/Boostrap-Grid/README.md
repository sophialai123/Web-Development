# Boostrap -- [Bootstrap’s grid documentation](https://getbootstrap.com/docs/4.1/layout/grid/)

## containers are the basis of Bootstrap’s grid. Inside containers, we nest rows as immediate children. Then, nested inside rows are columns. Inside columns, we put our actual content.

```
<div class="container">
  <div class="row">
    <div class="col">
      <!-- A column inside a row inside a container! -->
    </div>
  </div>
</div>
```
---
## Boostrap container classes 
- class="container-fluid" -- take up the entire width of the screen we can assign a class of"container-fluid".
  
- class="Container" -- to create a container, necessary for Bootstrap’s grid, we assign a class of "container"
---

## Rows -- class="row"
- Rows are nested within containers.
  
- By default, a row will take up the entire width of its parent container.
---


## Columns -- class="col"
- Columns are the immediate children of rows and store content.
- At most, a row will accommodate 12 columns.
- By default, a column will take up the entire width of its parent row.
- We can decide the width of a column by appending a hyphen and a number to the "col" class like so:
  ```
  <div class="row">
  <div class="col-8">
    <p>This is the width of 8 columns.</p>
  </div>
  <div class="col-4">
    <p>This has the width of 4 columns.</p>
  </div>
</div>
  ```
---

## Setting Column Width with Content -- class="col-auto"
---

## Bootstrap Breakpoints:
- The naming convention follows a pattern of "col-{breakpoint}-{width}".
  
- {breakpoint} can be sm, md, lg, or xl. Notice that there is no extra small or xs breakpoint. If we omit {breakpoint}, it is by default for extra small screens.
  
- {width} can be set from 1 to 12 and assigns a width to the column.

- When we set a {breakpoint}-{width}, it means that we want our column to have that set width for screens that fit in the specified breakpoint range and other larger screens.
  
```
<div class="col-sm-8"> 
</div>
```
---

## Combining Bootstrap Classes 
- renders a different width based on a user’s screen size. 

```
<div class="col-12 col-md-8 col-xl-6">
</div>
```

---

# Let’s review some key concepts:
- There are a few required links to use Bootstrap (the CSS file and two <meta> tags)
- Bootstrap 4 has a grid system implemented using flexbox
- The grid system is made of containers, rows, and columns that work together to make a web page’s layout.
- Containers are needed to implement the grid.
- Containers hold rows which hold columns.
- Bootstrap’s grid follows a 12 column system.
- Bootstrap uses responsive design and is built around breakpoints related to device screen sizes.
- To manually set the width of a column we have to follow Bootstrap’s naming convention.
- We can add multiple classes to a column to determine how wide a column should be on specific breakpoints
