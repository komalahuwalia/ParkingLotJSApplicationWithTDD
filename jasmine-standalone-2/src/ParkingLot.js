function ParkingLot() {
    this.cars = new Array();
    this.capacity = 3;
}

ParkingLot.prototype.park = function(car) {
  this.cars.push(car);
  var token = new ParkingToken(car.number);
  return token;
};

ParkingLot.prototype.hasCar = function(){
  return this.cars.length > 0;
};

ParkingLot.prototype.findCar = function(parkingToken){
  var tokenNumber = parkingToken.tokenNumber;
  var filteredCars = this.cars.filter(function(car){
    return car.number == tokenNumber;
  });
  return filteredCars.length > 0;;
};

ParkingLot.prototype.unParkCar = function(parkingToken){
  if(parkingToken == undefined){
    return undefined;
  }
  var tokenNumber = parkingToken.tokenNumber;
  return this.getCar(tokenNumber);
};

ParkingLot.prototype.getCar = function(number){
  var carIndex = -1;
  for(var i = 0; i < this.cars.length; i++){
    if(this.cars[i].number == number){
      carIndex = i;
      break;
    }
  }
  var car =  this.cars.splice(carIndex,1);
  if(car.length > 0){
    return car[0];
  }
  return undefined;
};

ParkingLot.prototype.isFull = function(){
  return this.cars.length == this.capacity;
}
