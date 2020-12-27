class Ball{


constructor(x,y,radius){

    var options = {
        'isStatic':false,
        'density':1,
"frictionAir":0.005
    }

    this.body = Bodies.circle(x, y,radius, options);
    
    
    World.add(world, this.body);



}


display(){


    
    ellipseMode(RADIUS)   
    ellipse(ball.body.position.x,ball.body.position.y,50,50 )


}





}