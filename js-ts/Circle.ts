class GameObject {
    constructor(public x: number, public y: number){}
}

class Circle extends GameObject {
    constructor(public x: number, public y: number, public radius: number){
        super(x, y);
    }
}

let circle = new Circle(10, 50, 8);
console.log(circle.x, circle.y, circle.radius);  // should print "10 50 8"