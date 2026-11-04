class Snowflake{
  constructor(x,y,z){
    // Challenge 5: Create animation variables y and dy for the Snowflake to fall.  Set them to appropriate values.
    this.obj = document.createElement("a-sphere");
    this.y = 0;
    this.dy = 0.5;
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("color","yellow");
    this.obj.setAttribute("scale",{x:5,y:5,z:5});
  }

  //Challenge 6: Create a function fall() which decreases y by dy and updates the Snowflake object to that y position
  fall(){
    this.y -= this.dy;
    this.obj.setAttribute("position", {x:0, y:this.y, z:0});
  }
}