class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let cloudpart1 = document.createElement("a-sphere");
    cloudpart1.setAttribute("position", "0 0 0");
    cloudpart1.setAttribute("color", "gray");
    this.obj.append(cloudpart1);

    let cloudpart2 = document.createElement("a-sphere");
    cloudpart2.setAttribute("position", "3 0 0");
    cloudpart2.setAttribute("color", "gray");
    this.obj.append(cloudpart2);

    let cloudpart3 = document.createElement("a-sphere");
    cloudpart3.setAttribute("position", "-3 0 0");
    cloudpart3.setAttribute("color", "gray");
    this.obj.append(cloudpart3);

    let cloudpart4 = document.createElement("a-sphere");
    cloudpart4.setAttribute("position", "0 -3 0");
    cloudpart4.setAttribute("color", "gray");
    this.obj.append(cloudpart4);

    let cloudpart5 = document.createElement("a-sphere");
    cloudpart5.setAttribute("position", "0 3 0");
    cloudpart5.setAttribute("color", "gray");
    this.obj.append(cloudpart5);

    let cloudpart6 = document.createElement("a-sphere");
    cloudpart6.setAttribute("position", "0 0 -3");
    cloudpart6.setAttribute("color", "gray");
    this.obj.append(cloudpart6);

    let cloudpart7 = document.createElement("a-sphere");
    cloudpart7.setAttribute("position", "0 0 3");
    cloudpart7.setAttribute("color", "gray");
    this.obj.append(cloudpart7);

    let cloudpart8 = document.createElement("a-sphere");
    cloudpart8.setAttribute("position", "-3 0 -3");
    cloudpart8.setAttribute("color", "gray");
    this.obj.append(cloudpart8);

    let cloudpart9 = document.createElement("a-sphere");
    cloudpart9.setAttribute("position", "3 0 3");
    cloudpart9.setAttribute("color", "gray");
    this.obj.append(cloudpart9);

    let cloudpart10 = document.createElement("a-sphere");
    cloudpart10.setAttribute("position", "0 -3 -3");
    cloudpart10.setAttribute("color", "gray");
    this.obj.append(cloudpart10);

    let cloudpart11 = document.createElement("a-sphere");
    cloudpart11.setAttribute("position", "0 3 3");
    cloudpart11.setAttribute("color", "gray");
    this.obj.append(cloudpart11);
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}