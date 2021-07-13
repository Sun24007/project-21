class Wall{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
          };
        this.groundWidth = width
        this.groundHeight = height
        //this.groundX = x 
        //this.groundY = y 
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        World.add(world, this.body);
    }
    show(){
      rect(this.body.position.x, this.body.position.y, this.groundWidth, this.groundHeight);
      rectMode(CENTER);
    }
}