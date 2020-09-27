class Paper {

    constructor(x, y, radius){
        var options ={
            isStatic: false,
            restitution: 0.8,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = 2*radius;

        World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("green");
      ellipse(0, 0, this.radius);
      pop();
    }
}