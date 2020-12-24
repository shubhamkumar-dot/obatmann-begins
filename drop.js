class Drop{
  constructor(x,y){
      var options = {
          firction : 0.1,
          restitution : 1,
          density : 1,
          isStatic:false
      }
     
      this.body = Bodies.circle(x,y,20,options);
      this.radius= 20;
      World.add(world,this.body);
  }

  update(){
    if(this.body.position.y > height){
      Matter.Body.setPosition(this.body , {x : random(0,400) , y : random(0,400)});
    }
  }

  display(){
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      ellipseMode(RADIUS);
      ellipse(0,0,this.radius);
      pop();
  }
}