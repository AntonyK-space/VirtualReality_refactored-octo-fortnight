let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [ ];
let ufoes = [ ];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

   for(let i = 0; i < 999; i++){
     let x = rnd(-50,50);
     let y = rnd(0,99);
     let z = rnd(-50,50);
     let rocket = new Rocket(x, y, z);
     rockets.push( rocket );
   }
   
   for(let i = 0; i < 999; i++){
     let x = rnd(-50,50);
     let y = rnd(50, 500);
     let z = rnd(-50,50);
     let ufo = new UFO(x, y, z);
     ufoes.push( ufo );
   }
  loop();
})

function loop(){
  for(let rocket of rockets){
    rocket.fly();
  }
  for(let ufo of ufoes){
    ufo.fall();
    ufo.breakdance();
    ufo.growth();
  }
  
  window.requestAnimationFrame( loop );
}
