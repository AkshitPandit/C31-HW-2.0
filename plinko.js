class Plinko{
    constructor(x, y, radius){
       var options={
           isStatic: true,
           'restitution': 0.4
       }
       this.body=Bodies.circle(x,y,radius);
       this.radius = radius;
       this.color = "white";
       World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();

        
    }
}
