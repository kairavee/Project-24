class Paper
{
    constructor(x,y,radius)
{

    var options=
    {
        isStatic:false,
        density:1.2,
        restitution:0.3,
        friction:0.5
    }

    
    this.body=Bodies.circle(x,y,radius,options);
    World.add(world,this.body)
}

display()
{   
  ellipseMode(RADIUS);
  ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
}
}