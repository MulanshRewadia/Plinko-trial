class Particles 
{
  constructor(x,y)
  {
      var options = {
          restitution : 0,
          friction : 0.08,
           
      }
      
      this.r = 10;
      this.body = Bodies.circle(x,y,this.r,options);
      World.add(world,this.body);
  } 

  display()
  {
    var pos = this.body.position;
    var angle = this.body.angle
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    noStroke();
    this.color = color(random(0,255),random(0,255));
    ellipseMode(CENTER);
    ellipse(0,0,this.r);
    pop();
}
 }