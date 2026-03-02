// Complete the js code
function Car(make, model) {
	this.make = make
	this.model = model
	this.getMakeModel = function(){
		return this.make + " "  + this.model
	}
}

function SportsCar extends Car(make, model, topSpeed) {
		super()
	this.topSpeed = topSpeed
	this.getTopSpeed = function(){
		return this.topSpeed
	}
}

const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel());
console.log(car.getTopSpeed())

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
