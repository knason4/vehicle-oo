//Part 1 - Create a class for vehicle. Each Vehicle instance should have make, model and year.
//each vehicle instance should have a method toString, which returns the string containing the make, model and year.

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep.";
    }
    toString() {
        return super.toString() + `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

//Part 2 - Create a class for a car. The Car class should inherit from Vehicle
//and each car instance should have a property called numWheels which has a value of 4.

class Car extends Vehicle {
    constructor(make, model, year, numWheels = 4) {
        //call parent constructor
        super(make, model, year);
        this.numWheels = numWheels;
    }

}

//Part 3 - Create a class for a Motorcycle. This class will inherit from Vehicle and each instance
//should have a property called numWheels which has a value of 2. It should also have a
//revEngine method that returns "Vroom!!!"
class Motorcycle extends Vehicle {
    constructor(make, model, year, numWheels = 2) {
        super(make, model, year);
        this.numWheels = numWheels;
    }
    revEngine() {
        return "Vroom!!!";
    }
}

//Part 4 - Create a class for a Garage. It should have a property called vehicles which will 
//store an array of vehicles, and a property called capacity which is a number indicating how many
//vehicles will always be empty; you only need to provide the capacity.

//A garage should also have an add method, which attempts to add a vehicle to the array
//of vehicles. However, if you try to add something which is not a vehicle, the garage should
//return the message "Only vehicles are allowed in here!". Also, if the garage is at capacity
// it should say "Sorry, we're full"

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        //if not a vehicle, return message "Only vehicles are allowed in here!"
        if(!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        //if garage is at capacity, return message "Sorry, we're full."
        if(this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
        

        //return message "Vehicle added!"
}
    