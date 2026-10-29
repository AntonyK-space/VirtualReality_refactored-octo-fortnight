let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x, 0, z);
    createCloud(x, 10, z);
  }

    for(let i = 0; i < 10; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createHouse(x, 0, z);  
    }

   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.

   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
})

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/

function createCloud(x, y, z){
  let cloud = document.createElement("a-entity");

  let cloudpart1 = document.createElement("a-sphere");
  cloudpart1.setAttribute("position", "0 0 0");
  cloudpart1.setAttribute("color", "gray");
  cloud.append(cloudpart1);

  let cloudpart2 = document.createElement("a-sphere");
  cloudpart2.setAttribute("position", "3 0 0");
  cloudpart2.setAttribute("color", "gray");
  cloud.append(cloudpart2);

  let cloudpart3 = document.createElement("a-sphere");
  cloudpart3.setAttribute("position", "-3 0 0");
  cloudpart3.setAttribute("color", "gray");
  cloud.append(cloudpart3);

  let cloudpart4 = document.createElement("a-sphere");
  cloudpart4.setAttribute("position", "0 -3 0");
  cloudpart4.setAttribute("color", "gray");
  cloud.append(cloudpart4);

  let cloudpart5 = document.createElement("a-sphere");
  cloudpart5.setAttribute("position", "0 3 0");
  cloudpart5.setAttribute("color", "gray");
  cloud.append(cloudpart5);

  let cloudpart6 = document.createElement("a-sphere");
  cloudpart6.setAttribute("position", "0 0 -3");
  cloudpart6.setAttribute("color", "gray");
  cloud.append(cloudpart6);

  let cloudpart7 = document.createElement("a-sphere");
  cloudpart7.setAttribute("position", "0 0 3");
  cloudpart7.setAttribute("color", "gray");
  cloud.append(cloudpart7);

  let cloudpart8 = document.createElement("a-sphere");
  cloudpart8.setAttribute("position", "-3 0 -3");
  cloudpart8.setAttribute("color", "gray");
  cloud.append(cloudpart8);

  let cloudpart9 = document.createElement("a-sphere");
  cloudpart9.setAttribute("position", "3 0 3");
  cloudpart9.setAttribute("color", "gray");
  cloud.append(cloudpart9);

  let cloudpart10 = document.createElement("a-sphere");
  cloudpart10.setAttribute("position", "0 -3 -3");
  cloudpart10.setAttribute("color", "gray");
  cloud.append(cloudpart10);

  let cloudpart11 = document.createElement("a-sphere");
  cloudpart11.setAttribute("position", "0 3 3");
  cloudpart11.setAttribute("color", "gray");
  cloud.append(cloudpart11);

  cloud.setAttribute("position",{x:x, y:y, z:z});
  scene.append(cloud)
}

/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/

function createHouse(x, y, z){
  let house = document.createElement("a-entity");

  let room = document.createElement("a-box");
  room.setAttribute("side", "double");
  room.setAttribute("color", "maroon");
  room.setAttribute("height", "2");
  room.setAttribute("depth", "2");
  room.setAttribute("width", "2.5");
  room.setAttribute("position", "0 1 0");
  house.append(room);

  let roof = document.createElement("a-cylinder");
  roof.setAttribute("color", "yellow");
  roof.setAttribute("radius", "1");
  roof.setAttribute("segments-radial", "3");
  roof.setAttribute("rotation", "-90 0 0");
  roof.setAttribute("position", "0 2.25 0");
  roof.setAttribute("scale", "1.5 2.25 .5");
  house.append(roof);

  house.setAttribute("position",{x:x, y:y, z:z});
  scene.append(house)
}

function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}



