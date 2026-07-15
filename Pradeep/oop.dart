class Car{
  String brandName = "Tata";
  String carName = "Nexon";
  String carColor = "White";
  int carNofWheels = 4;
  int carTopSpeed = 190;
  int milage = 15;
void acc(){
  print("Car moves");
}
void breaks(){
  print("Car Stops");
}
}
void main(){
  Car c1 = Car();
  c1.carColor = "Red";
  print(c1.brandName);
  print(c1.carName);
  print(c1.carNofWheels);
  print(c1.carColor);
   Car c2 = Car();
   c2.carColor = "Grey";
   print(c2.carColor);
   c1.acc();
   c2.acc();
}