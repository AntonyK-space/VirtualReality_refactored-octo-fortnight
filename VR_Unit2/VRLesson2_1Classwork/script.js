window.addEventListener("DOMContentLoaded",function() {
  let scene = document.querySelector("a-scene");

  let dodecahedron1 = document.createElement("a-dodecahedron");

  dodecahedron1.setAttribute("position","0 5 -50");
  dodecahedron1.setAttribute("color","yellow");
  dodecahedron1.setAttribute("radius",5);

  scene.append(dodecahedron1);
  for(let a=0; a>100; a++){
    let dodecahedron = document.createElement("a-dodecahedron");
    dodecahedron.setAttribute("position",{x:a}, {y:a}, {
      z:a});
    scene.append(dodecahedron);
  }
  
})
  //Challenge 1: Create a variable scene for the <a-scene> component in the HTML


  //Challenge 2: Create a variable for <a-dodecahedron> and create it.

  
  //Challenge 3: Change the <a-dodecahedron>'s position, radius and color


  //Challenge 4: Add the <a-dodecahedron> to the scene


  /* Challenge Bonus
  1) Use a for loop to create a lot of <a-dodecahedron> 
  2) Change each <a-dodecahedron>'s position to a random x, y, and z location
  3) Change each <a-dodecahedron>'s to a random color.  Hint: Use rgb( ) and string interpolation 
  */