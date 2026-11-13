let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let mechTemplate;
let mechs = [ ];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mechTemplate = document.getElementById("mech-1");
 
  for(i = 0; i < 99; i++){
    let x = rnd(-50,50);
    let y = rnd(-50,50);
    let z = rnd(-50,50);
    mech = new Mech(x, y, z);
    mechs.push( mech );
  }

  loop();VR_Unit2/VRLesson2_6Classwork/script.js
})
function loop(){
  for(let mech of mechs){
    mech.fly();
  }

  window.requestAnimationFrame( loop );
}
