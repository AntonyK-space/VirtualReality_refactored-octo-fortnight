class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let room = document.createElement("a-box");
    room.setAttribute("side", "double");
    room.setAttribute("color", "maroon");
    room.setAttribute("height", "2");
    room.setAttribute("depth", "2");
    room.setAttribute("width", "2.5");
    room.setAttribute("position", "0 1 0");
    this.obj.append(room);

    let roof = document.createElement("a-cylinder");
    roof.setAttribute("color", "yellow");
    roof.setAttribute("radius", "1");
    roof.setAttribute("segments-radial", "3");
    roof.setAttribute("rotation", "-90 0 0");
    roof.setAttribute("position", "0 2.25 0");
    roof.setAttribute("scale", "1.5 2.25 .5");
    this.obj.append(roof);
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}