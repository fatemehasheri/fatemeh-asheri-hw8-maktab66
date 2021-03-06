class Circle {
    constructor(radius) {
        this.radius =radius;
    }

    getArea(){
		return Math.PI * (this.radius ** 2)
	}

	getPerimeter(){
		return 2 * Math.PI * this.radius
	}
}

let circle = new Circle(11)
console.log(circle.getArea())

let circle1 = new Circle(4.44)
console.log(circle1.getPerimeter())
