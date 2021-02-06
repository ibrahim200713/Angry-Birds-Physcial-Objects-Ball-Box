class Ball{
    constructor(x, y, radius) {

        var options ={
        restitution: 1.0
        }
        this.body = Bodies.circle(x,y,radius, options);
        World.add(world,this.body);
        this.radius = radius;


    }
    display(){
        var pos = this.body.position;
        fill("ÿellow");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius, this.radius);

    }


}