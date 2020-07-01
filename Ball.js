class Ball{
    constructor(x,y,width){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body=Bodies.circle(x,y,width,options);
        this.width=width;
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS);
        var colors=["red","blue","purple","yellow","green","white"];
        var rand=Math.round(random(0,5));
        fill(colors[rand]);
        ellipse(0,0,this.width,this.width)
        pop();
    }
}