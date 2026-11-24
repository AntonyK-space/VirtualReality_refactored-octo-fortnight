window.addEventListener("DOMContentLoaded",function() {
  let myBox = document.querySelector("#myBox");
  //Task 3: Create a variable for the cylinder.  Get the element from the HTML
  can = document.getElementById("can")

  myBox.addEventListener("mouseenter",function(){
    this.setAttribute("height",10);
    this.setAttribute("depth",5);
    this.setAttribute("length",2);
  })

  myBox.addEventListener("mouseleave",function(){
    this.setAttribute("height",1);
    this.setAttribute("depth",1);
    this.setAttribute("length",1);
  })

  can.addEventListener("click",function(){
    this.setAttribute("opacity",0);
  })

  can.addEventListener("mouseleave",function(){
    this.setAttribute("opacity",1);
  })
  //Task 4: Add another event to set the height of myBox back to 1 when the mouse is no longer on myBox

  //Task 5: Make  the the cylinder disappear when you click on it.  Set opacity to zero
})
