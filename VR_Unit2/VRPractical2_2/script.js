let scene, car, pokemonball, rocket, dude, sun;
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    car = document.querySelector("#car");
    car.x = 0;
    car.dx = 0.05;

    pokemonball = document.querySelector("#pokemonball");
    pokemonball.a = 0;
    pokemonball.da = 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;

    rocket = document.querySelector("#rocket");
    rocket.y = 0;
    rocket.dy = .01;

    dude = document.querySelector("#dude");
    dude.e = 1;
    dude.de = 0.001;

    sun = document.querySelector("#sun");
    sun.c = 0;
    sun.dc = 0.001;

    loop();
})

function loop(){
    car.x += car.dx;
    car.setAttribute("position", {x:car.x, y:0, z:-5});

    pokemonball.a += pokemonball.da;
    pokemonball.setAttribute("rotation", {x:pokemonball.a, y:0, z:0});

    rocket.y += rocket.dy;
    rocket.setAttribute("position", {x:5, y:rocket.y, z:-5});

    dude.e += dude.de;
    dude.setAttribute("scale", {x:dude.e, y:dude.e, z:dude.e});

    sun.c += sun.dc;
    sun.setAttribute("opacity", `${sun.c}`);

    window.requestAnimationFrame(loop);
}
