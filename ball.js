class Ball{

    constructor(x,y,width,height){

        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.image = loadImage("Superhero-02.png");
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height, options);
        World.add(world, this.body);
    }
    display(){

        var paperPos = this.body.position;

        push();
        translate(paperPos.x, paperPos.y);
        imageMode(CENTER);
        strokeWeight(3);
        fill("maroon");
        image(this.image,0,0,this.width,this.height);
        pop();
    }
    }   