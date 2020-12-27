class Sling{

    constructor(bodyA,pointB){
    
    var a={
    bodyA:bodyA,
    pointB:pointB,
    length:500,
    stiffness:0.3
    
    
    }
    this.pointB=pointB
    this.body=Constraint.create(a)  
    World.add(world,this.body)
    }
    
    display(){
    if(this.body.bodyA){
    var pointA=this.body.bodyA.position
    var pointB=this.pointB
    
    line (pointA.x,pointA.y,pointB.x,pointB.y)
    }
    }
    }
    