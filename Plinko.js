class Plinko{
    constructor(x,y,width){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.body=Bodies.circle(x,y,width,options);
        this.width=width;
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        fill("white");
        ellipse(this.body.position.x,this.body.position.y,this.width,this.width)
    }
}