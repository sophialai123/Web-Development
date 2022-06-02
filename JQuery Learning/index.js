//use jQuery to change h1 css to red color

//use this document ready function so the browser will wait all the document ready to load.
$(document).ready(function(){
  //set css propety values
  // $("h1").css("color","red");

  // use jQuery to change or set css property.
  $("h2").css ("font-size","5rem");
  $("button").css("background-color","lightgreen");

  //add two classes name, space in bwtween, title and muticlass are class names
  $("h1").addClass("title muticlass");


  //remove class
  // $("h1").removeClass("title");


  //to check if that element has that class, will return true or flase;
  //$("h1").hasClass("title");

  //change the text(add new text), h1 will change from "Hello" to "Good".
  $("h1").text("Good");


  // select all button elements to change the text,
  //text will change from "Click me" to "Changed names".
  $("button").text("Changed names");

  //update html information
  $("h3").html("<em>Happy</em>");


  //get attributes, this image will not appear because we do not have that image
  // console.log($("img").attr("src"));


  //set attributes, it will redict to that link
  $("a").attr("href");


  //set the second attribute value, the link will change to the current link
  $("a").attr("href","https://api.jquery.com/attr/");


  // get class attributes, need to check at chrome console
  $("h1").attr("class");

  // adding click Event Listerners  with jQuery
  $("h1").click(function(){
    $("h1").css("color","purple"); // change h1 blue color to purple

  });

  $("button").click(function(){
    $("h1").css("color","green");// when pressed the any buttons, the h1 color will change to green.

  });

  // adding keypress Event Listerners  with jQuery
  $("input").keypress(function(event){
    $("h1").text(event.key);  // will show which key was pressed.

  });

  // adding mouseover Event Listerners  with jQuery
  $("h1").on("mouseover",function(){
    $("h1").css("color","yellow"); // the color will change to yellow when your mouse over.

  });

  // adding new button before and after the h1:
  $("h1").before("<button>before</button>");
  $("h1").after("<button>after</button>");


  // adding new prepend just before the text of h1 , inside of h1:
  $("h1").prepend("<button>prepend</button>");

   // adding append just after the text of h1, inside of h1:
   $("h1").append("<button>append</button>");

  //removing elements
  $("h2").remove(); // removed h2


  //websites with Animations hide(), h1 will disappear when click button 
  // $("button").on("click",function(){
  //   $("h1").hide(); 
  //   $("h1").show(); //will show again
    
  // });
  
  //websites with Animations toggle(), h3 will disappear when click button , will come back when click the button again.
  // $("button").on("click",function(){
  //   $("h3").toggle(); 
 
  // });
  
  //websites with Animations fadetoggle(), h3 will disappear when click button slower than toggle, will come back when click the button again.
 
  // $("button").on("click",function(){
  //   $("h3").fadeToggle(); 
 
  // });

  //websites with Animations slidetoggle() good with drop down meun, h1 will slide up and slide down 
  // $("button").on("click",function(){
  //   $("h1").slideToggle(); 
 
  // });


  // gradually forwards with animate({css rules with numbers only})
  // $("button").on("click",function(){
  //   $("h1").animate({opacity:0.5}); 
 
  // });


  // use mutiple methods togeter, will happen in order 
  $("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({margin:"20%"}); 

  });


  









})
