let store = { drivers: [] , passengers: [], trips: [] };
let driverId = 0;
class Driver {
    constructor(name) {
        this.name = name;
        this.id = ++driverId;
        store.drivers.push(this);
    }
    trips() {
        return store.trips.filter(trip => {
            return trip.driverId === this.id;
        });
    }
    passengers() {
        const passengers = [];
        this.trips().forEach(function (trip, i, array) {
            passengers.push(trip.passenger());
        });
        return passengers;
    }
}

let passengerId = 0;
class Passenger {
    constructor(name) {
        this.name = name;
        this.id = ++passengerId;
        store.passengers.push(this);
    }
    trips() {
        return store.trips.filter(trip => {
            return trip.passengerId === this.id;
        });
    }
    drivers() {
        const drivers = [];
        this.trips().forEach(function (trip, i, array) {
            drivers.push(trip.driver());
        });
        return drivers;
    }
}

let tripId = 0;
class Trip {
    constructor(driver, passenger){
        this.id = ++tripId;
        if(driver) {
            this.driverId = driver.id
        }
        if(passenger) {
            this.passengerId = passenger.id
        }
        store.trips.push(this);
    }
    driver() {
        return store.drivers.find(function (driver) {
            return driver.id === this.driverId;
        }.bind(this));
    }
    passenger() {
        return store.passengers.find(function (passenger) {
            return passenger.id === this.passengerId;
        }.bind(this));
    }
}