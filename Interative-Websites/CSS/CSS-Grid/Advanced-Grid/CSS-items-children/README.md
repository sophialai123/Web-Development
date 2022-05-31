## Justify Self and Align Self
### This property will override align-items for any item on which it is declared.
### Align-self and justify-self accept the same values as align-items and justify-items

---

1. justify-self specifies how an individual element should position itself with respect to the row axis. This property will override justify-items for any item on which it is declared.

2. align-self specifies how an individual element should position itself with respect to the column axis. This property will override align-items for any item on which it is declared.
---
## They both accept these four properties:  
- start — positions grid items on the left side/top of the grid area
- end — positions grid items on the right side/bottom of the grid area
- center — positions grid items on the center of the grid area
- stretch — positions grid items to fill the grid area (default)

---
## ***Review***
- grid-template-areas specifies grid named grid areas
  
- grid layouts are two-dimensional: they have a row, or inline, axis and a column, or block, axis.
 
- justify-items specifies how *individual* elements should spread across the row axis

- justify-content specifies how *groups* of elements should spread across the row axis
  
- justify-self specifies how a single element should position itself with respect to the row axis (grid items)
  
- align-items specifies how *individual* elements should spread across the column axis
  
- align-content specifies how *groups* of elements should spread across the column axis
  
- align-self specifies how a single element should position itself with respect to the column axis (grid items)
  
- grid-auto-rows specifies the height of rows added implicitly to the grid
  
- grid-auto-columns specifies the width of columns added implicitly to the grid
  
- grid-auto-flow specifies in which direction implicit elements should be created