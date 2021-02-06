class Ball{

    constructor(x,y,r){
        var options = {
            frictionAir : 0.015,
           
            density:0.1
         
        }
         this.x=x;
         this.y=y;
         this.r=r;
         this.body=Bodies.circle(this.x,this.y,this.r,options);
         World.add(world,this.body);
        }
 
        display(){
            var ballpos=this.body.position
 
            push()
            translate(ballpos.x,ballpos.y);
            ellipseMode(RADIUS);
            strokeWeight(3);
            fill(12,28,33);
            ellipse(0,0,this.r,this.r);
            pop()
            
        }
     }










    