/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let maze = [
  "Y-CYCYCYCYCYCYCYCYCYCYC",
  "C---C------------CYCYCY",
  "Y---------------YM----C",
  "C-C--------------YCYC-Y",
  "Y-YCYCYCYCYCYCYC----Y-C",
  "C-M-M-M-M-M-M-MY-M--C-Y",
  "Y--m-m-m-m-m-m-C-m--Y-C",
  "C-CYCYCYCYCYCYCY----C-Y",
  "Y-Y---Y---Y---Y-C-YMC-C",
  "C-C-Y-C-Y-C-Y-C-Y-C---Y",
  "Y-Y-C-Y-C-Y-C-Y-C-Y-Y-C",
  "C-C-Y-C-Y-C-Y-C-Y-CYC-Y",
  "Y---C---C---C---C-----C",
  "CMYCYCYCYCYCYCC-YCYCYCY",
  "YmMmMmMmMmMmMmY-mMmMmMC",
  "CYCYCYCYCYCYCYCYCYCYCmY",
];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene, movingblocks = [ ];
let movingblockoppos = [ ];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "Y"){
        new Yellowblock(c,1,r);
      }
      else if(cols[c] == "C"){
        new Cyanblock(c,1,r);
      }else if(cols[c]=="M"){
        let movingblock = new Movingblock(c,1,r);
        movingblocks.push( movingblock );
      }else if(cols[c]=="m"){
        let movingblockoppo = new Movingblockoppo(c,3,r);
        movingblockoppos.push( movingblockoppo );
      }
  }
  loop();
}
})

function loop(){
  for(let movingblock of movingblocks){
    movingblock.MOVE();
  }
  for(let movingblockoppo of movingblockoppos){
    movingblockoppo.move();
  }
  window.requestAnimationFrame( loop );
}
    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */