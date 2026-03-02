// Complete the js code
function Car(make, model) {
	getMakeModel(){
		return `${this.make} ${this.model}`
}
}

function SportsCar extends Car(make, model, topSpeed) {
	getTopSpeed(){
		return this.topspeed
	}
}

const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel());
console.log(car.getTopSpeed())

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
