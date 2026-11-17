class Dude{
  constructor(x,y,z){
    this.obj = dudeTemplate.cloneNode(true);
    this.x = x;
    this.y = y;
    this.z = z;
    this.dx = 0;
    this.dy = .1;
    this.dz = .01;
    this.zz = .001;
    //Challenge 1: Add delta variables in order to make the dude walk forward on the z axis and jump up and down on the y axis.

    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    scene.append(this.obj);
  }
  jump(){
    //Challenge 2: Add the accumulators to modify the y and z variables
    this.y += this.dy;
    this.dz += this.zz;
    this.z += this.dz;
    if(this.y > 2 || this.y < 1){
      this.dy = -this.dy;
    }
    if(this.z > 10 || this.z < -10){
      this.dz = -this.dz;
    }
    //Challenge 3: Add the decision in order to alternate the delta on the y axis when the dude reaches less then 1 or greater than 2

    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
  }
}