
## BOOTSTRAP 4: UTILITIES AND COMPONENTS
- animations and interactivity that requires the addition of Bootstrap’s JavaScript files.




### [Utilities-colors](https://getbootstrap.com/docs/4.2/utilities/colors/)
- Utility classes which affect the styling and position of elements.
  
  ```
    <div class="bg-success text-white">
    Alright, we want to have a green background AND change the text color to white.
    </div>
  ```
---

### [Utilities-text](https://getbootstrap.com/docs/4.2/utilities/text/) 
  ```
   <p class="font-weight-bold">
     This rendered text is bold.
   </p>
  ```

---


 ### [Utilities-position](https://getbootstrap.com/docs/4.2/utilities/position/)

  ``` 
   <div class="fixed-top">
     This div will be fixed at the top of the screen. 
   </div>
  ```
---


### [ Navigation Component](https://getbootstrap.com/docs/4.2/components/navs/)

- the nav component provides default Bootstrap styling to links.
  
 ```
 <nav class="nav">
   <a class="nav-link" href="#">First Link</a>
    <a class="nav-link" href="#">Second Link</a>
 </nav>

 ```
---

 
### [Button Component](https://getbootstrap.com/docs/4.2/components/buttons/#examples)
  ```
   <button type="button" class="btn btn-danger">Danger</button>
  ```
---


### [Component Collapse](https://getbootstrap.com/docs/4.2/components/collapse/)

- You can use a link with the href attribute, or a button with the data-target attribute. In both cases, the data-toggle="collapse" is required.
- collapse to toggle component visibility.

---
### [Creating a Navbar](https://getbootstrap.com/docs/4.2/components/navbar/#supported-content)

- The responsive navbar component to quickly navigate between webpages.

### Supported content
- navbar-brand for your company, product, or project name.
- navbar-nav for a full-height and lightweight navigation (including support for dropdowns).
- navbar-toggler for use with our collapse plugin and other navigation toggling behaviors.
- form-inline for any form controls and actions.
- navbar-text for adding vertically centered strings of text.
- collapse.navbar-collapse for grouping and hiding navbar contents by a parent breakpoint.
  
---
### [Jumbotron Component ](https://getbootstrap.com/docs/4.2/components/jumbotron/)

-  The jumbotron component which prominently displays an image or text.

---
## [Adding a Card](https://getbootstrap.com/docs/4.2/components/card/#example)

- Card components are often grouped together to display a collection of similar content in manageable chunks.
- By default, this card will take up the entire width of its parent element.
- The content inside the card body all have classes with "card-{value}" which adds styling to these elements specific for Bootstrap cards.
- The card component that acts as a stylized content container.
  
```
<div class="card">
  <img class="card-img-top" src="placeholder.jpg" alt="card example image">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Card description goes here.</p>
    <a href="#" class="card-link">Link to somewhere.</a>
   </div>
</div>
```

---
## [The Carousel Component](https://getbootstrap.com/docs/4.2/components/carousel/)

- The carousel component to create a slideshow which displays images or text.

```
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="example_slide_1.png" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="example_slide_2.png" alt="Second slide">
    </div>
  </div>
</div>
```

 - The parent div element has an id of "carouselExampleSlidesOnly", two classes "carousel" and "slide", and the attribute data-ride="carousel".
   - The id is used later when we want to add controls to click between slides.
  
   - The data-ride attribute provides the interactivity and slide transitions.

- We also have a nested div class="carousel-inner" element that contains other  elements with images. 
  
 - Nested inside the 2nd div is with a class of "carousel-item" and "active" (only one image needs the active class, if none have active, no images are shown).

- The img elements use two utility classes"d-block" sets its display as block and the "w-100" is to take up 100% of the width.