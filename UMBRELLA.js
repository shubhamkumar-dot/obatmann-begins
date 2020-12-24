class Umbrella{
    constructor(){
        var options = {
            restitution:1,
            density:1,
            friction:1,
            isStatic:true
        }
        this.image = loadAnimation('Walking Frame/walking-1.png','Walking Frame/walking-2.png','Walking Frame/walking-3.png','Walking Frame/walking-4.png','Walking Frame/walking-5.png','Walking Frame/walking-6.png','Walking Frame/walking-7.png','Walking Frame/walking-8.png')
        this.body = Bodies.circle(200,200,20,options);
        this.radius  =20;
        World.add(world,this.body);
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(RADIUS);
        image(this.image,0,0,this.radius);
        pop();
    }
}