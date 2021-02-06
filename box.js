class Box{
    constructor(x,y,w,h){
        var options ={
            restitution: 1.0
        }
    
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.width = w;
        this.height = h;
    
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate (angle);
        translate(pos.x, pos.y);
        fill("brown");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

    }
}