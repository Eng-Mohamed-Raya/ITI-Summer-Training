console.log("***************************************************");



class Shape{
    constructor(color){
        if(new.target===Shape){
            throw new Error("can not be instantiated directly")
        }
        this.color=color;
    }
    area(){
        throw new Error("Abstract method 'area() \ must be implemented by subclasses'")
    }
    render(){
        throw new Error("Abstract method 'render() \ must be implemented by subclasses'")
    }


    getInfo(){
        return `A ${this.color} shape with area: ${this.area()} .`
    }
}


class Circle extends Shape{
    constructor(color,radius){
        super(color)
        this.radius=radius;
    }
 
     area(){
        return (Math.PI * Math.pow(2,this.radius)).toFixed(3);
    }
}


class Rectangle extends Shape{
    constructor(color,width,height){
        super(color)
        this.width=width;
        this.height=height;
    }
 
     area(){
        return this.width * this.height; 
    }
}


//** instanse from Shape 

    // let shape1=new Shape();

//** instanse from child classes
let circle=new Circle("red",5)
let rectangle=new Rectangle("blue",4,6);

// polymorphic method
console.log(circle.area());
console.log(rectangle.area());

// shared method
console.log(circle.getInfo());
console.log(rectangle.getInfo());

// **access abstract method without implement in class
    
    // circle.render()
    // rectangle.render()
