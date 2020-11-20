class ground{
    constructor(){
        var options={
            isStatic: true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        
        this.body = Bodies.rect(400, 650, 800, 50, options);
        World.add(world,this.body);
    }

display(){
    var groundB = this.body.position;

    push();
    translate(groundB.x, groundB.y);
    rectMode(CENTER);
    stokeweight(3);
    fill(255,0,255);
        pop();
}

}