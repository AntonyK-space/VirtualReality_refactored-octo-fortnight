let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate;
let armyofdudies = [ ];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.
   for(let i = 0; i < 99; i++){
     let x = rnd(-50,50);
     let z = rnd(-10,10);
     let dude = new Dude(x, 0, z);
     armyofdudies.push( dude );
   }
   
   
  loop();  
})
function loop(){
  //Challenge 5: Make all the dudes jump.
  for(let dude of armyofdudies){
    dude.jump();
  }
  window.requestAnimationFrame( loop );
}