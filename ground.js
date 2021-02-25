class ground {
    constructor(x,y,width,height){
        var g = {
            isStatic:true
        }
      this.body=Bodies.rectangle(x,y,width,height,g)  
      World.add(world,this.body)

    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        fill("brown")
        rect(pos.x,pos.y,this.width,this.height)
    }
}