class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed<3.1){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        console.log(this.body.speed)
        pop();
      }
      else{
        World.remove(world , this.body)
      }
      function score() {
        blocks1.score();
        blocks2.score();
        blocks3.score();
        blocks4.score();
        blocks5.score();
        blocks6.score();
        blocks7.score();
        blocks8.score();
        blocks9.score();
      }
      }
}
