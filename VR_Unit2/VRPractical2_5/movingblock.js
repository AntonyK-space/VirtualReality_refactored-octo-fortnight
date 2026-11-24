class Movingblock{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.001;
    this.yy = 0.001;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color","black");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
  MOVE(){
    //this.dy += this.yy;
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    if(this.y > 3 || this.y < 1){
      this.dy = -this.dy;
    }
  }
}