class vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    move() {
        console.log('gari chole na chole na re')
    }
}

const car = new vehicle('toyota', 20000)

console.log(car)
car.move()

class luxury extends vehicle {
    constructor(name, price, color, model) {
        super(name,price)
        this.color = color;
        this.model = model;
    }
}
const nCar = new luxury ('corollla',300000,'black','A-3E5')

console.log(nCar)

class superLuxury extends luxury{
    constructor(name,price,color,model,sitCount,brand){
        super(name,price,color,model)
        this.sitCount=sitCount
        this.brand=brand
    }
}

const Pcar = new superLuxury ('rolls-royals',20000000,'rose-gold','B-9I0L',6,'USA-Made')
console.log(Pcar)
Pcar.move()