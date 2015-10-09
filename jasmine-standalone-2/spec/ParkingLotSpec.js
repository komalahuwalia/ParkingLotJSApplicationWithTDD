describe("Parking Lot", function() {
  var parkingLot;
  var car;

  beforeEach(function() {
    parkingLot = new ParkingLot();
    car = new Car("MH 12 04 1");
  });

  it("should be able to park a car", function() {
    parkingLot.park(car);
    expect(parkingLot.hasCar()).toBeTruthy();

  });

  it("should be able to find my car", function() {
    var token = parkingLot.park(car);
    var hasFoundCar = parkingLot.findCar(token);
    expect(hasFoundCar).toBeTruthy();
  });

  it("should be empty be default", function(){
    var parkedCar = parkingLot.unParkCar();
    expect(parkedCar).not.toBeDefined();
  });


  it("should be able to unpark my car", function() {
    var token = parkingLot.park(car);
    var parkedCar = parkingLot.unParkCar(token);
    expect(parkedCar.number).toEqual(token.tokenNumber);
  });

  it("should be able to find if parking lot is full", function() {
    parkingLot.park(car);
    parkingLot.park(new Car("MH 12 04 2"));
    parkingLot.park(new Car("MH 12 04 3"));
    parkingLot.park(new Car("MH 12 04 4"));

    expect(parkingLot.isFull()).toBeFalsy();
  });

});
