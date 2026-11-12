class Rocket{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = .1;
    this.yy = .01;

    let pointytop = document.createElement("a-cone");
    pointytop.setAttribute("color","grey");
    pointytop.setAttribute("position","0 3 0");
    pointytop.setAttribute("height","5");
    pointytop.setAttribute("radius-bottom","0.4");
    this.obj.append( pointytop );
  
    let rocketbody = document.createElement("a-cylinder");
    rocketbody.setAttribute("position","0 0 0");
    rocketbody.setAttribute("color","gray");
    rocketbody.setAttribute("radius","0.3");
    this.obj.append( rocketbody );

    let fire = document.createElement("a-cone");
    fire.setAttribute("position","0 -1 0");
    fire.setAttribute("color","red");
    fire.setAttribute("radius-bottom","0.1");
    fire.setAttribute("rotation","180 0 0");
    this.obj.append( fire );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj );
  }
  fly(){
    this.dy += this.yy;
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    if(this.y > 100){
      this.y = 0.5;
      if(this.y < 0.5){
        this.y += this.dy;
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
      }
    }
  }
}