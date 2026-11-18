let maze = [
  "xxx-xxxxxxxxxxxxxxxxxxxxxx",
  "xxx-xxxxxxxxxxxxxxxxxxxxxx",
  "xxx-xxxxxxxxxxxxxxxxxxxxxx",
  "xxx-x---x--------------xxx",
  "xxx-x-xxx-xxx-xxxxxx-x-xxx",
  "xxx-x-----xxx------x-x-xxx",
  "xxx---x-x-xxx-xxxx-x---xxx",
  "xxx-x-x-x-xxx----x-xxxxxxx",
  "xxx-x-x-x------x-x-----xxx",
  "xxx---xxxxxxxx-x-x--T--xxx",
  "xxxxx-------x--x-x-----xxx",
  "xxxxxxxxxxx-x-xxxxxxxxxxxx",
  "xxx---------x----------xxx",
  "xxxxxxxxxxxxxxxxxxxxxx-xxx",
  "xxxxxxxxxxxxxxxxxxxxxx-xxx",
  "xxxxxxxxxxxxxxxxxxxxxx-xxx",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})