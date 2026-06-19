class Bikes:
    bikename= "MT"
    bikeBrand= "Yamaha"
    bikeWheels= 2
    bikeMirrors= 2
    bikenoofSeats= 1
    bikeColor= "orange"
    topSpeed=150

    def breakBike1(self):
        print("Bike has stopped")
    def accBike1(self):
        print("Bike Moves")


# instence or Objects
b1 = Bikes()
print(b1.topSpeed)
b1.topSpeed = 200
print(b1.bikename)
print(b1.bikeBrand)
print(b1.bikeWheels)
print(b1.bikenoofSeats)
print(b1.bikeMirrors)
print(b1.topSpeed)
print(b1.bikeColor)
print(b1.accBike1())
print(b1.breakBike1())