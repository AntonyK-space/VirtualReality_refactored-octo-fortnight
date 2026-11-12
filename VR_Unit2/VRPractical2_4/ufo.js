class UFO{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = .1;
    this.rx = 0;
    this.ry = 0;
    this.rz = 0;
    this.rdx = 7;
    this.rdy = 5;
    this.rdz = 3;
    this.rrx = .001;
    this.rry = .001;
    this.rrz = .001;
    this.scalebegin = 1;
    this.scaleadd = .0001;

    let top = document.createElement("a-sphere");
    top.setAttribute("color","cyan");
    top.setAttribute("position","0 0 0");
    top.setAttribute("radius","1");
    top.setAttribute("scale","2 1.85 2");
    this.obj.append( top );
  
    let body = document.createElement("a-torus");
    body.setAttribute("position","0 0 0");
    body.setAttribute("color","gray");
    body.setAttribute("rotation","90 0 0");
    body.setAttribute("scale","2 2 2");
    this.obj.append( body );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj );
  }
  fall(){
    this.y -= this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    if(this.y < 1.5){
        this.y = 1.5;
    }
  }
  breakdance(){
    this.rdx += this.rrx;
    this.rdy += this.rry;
    this.rdz += this.rrz;
    this.rx -= this.rdx;
    this.ry += this.rdy;
    this.rz -= this.rdz;
    this.obj.setAttribute("rotation",{x:this.rx, y:this.ry, z:this.rz});
  }
  growth(){
    this.scalebegin += this.scaleadd;
    this.obj.setAttribute("scale",{x:this.scalebegin, y:this.scalebegin, z:this.scalebegin})
  }
}