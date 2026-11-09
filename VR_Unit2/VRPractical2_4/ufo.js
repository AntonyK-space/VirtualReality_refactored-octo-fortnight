class UFO{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = .01;

    let top = document.createElement("a-sphere");
    top.setAttribute("color","cyan");
    top.setAttribute("position","0 0 0");
    top.setAttribute("radius","1");
    this.obj.append( top );
  
    let body = document.createElement("a-torus");
    body.setAttribute("position","0 0 0");
    body.setAttribute("color","gray");
    body.setAttribute("rotation","90 0 0");
    this.obj.append( body );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj );
  }
  fall(){
    this.y -= this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}