class Mech{
  constructor(x,y,z){
    this.obj = mechTemplate.cloneNode(true);
    this.x = x;
    this.y = y;
    this.z = z;
    this.dx = 0;
    this.dy = .05;
    this.dz = 0;

    
    this.obj.setAttribute("position", {x:x, y:y, z:z});
    scene.append( this.obj );
  }
  fly(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}