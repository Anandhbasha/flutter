class Bike{
    String bikeBrandName = "RE";
    String bikeModelName = "Classic";
    int bikeCC = 350;
    float bikefuelCapacity = 12.5f;
    int bikeMilage = 35;
    String bikeColor = "white";

    void add(){
        System.out.println("Bike1Moves");
    }
    void brk(){
        System.out.println("Bike1 Stops");
    }
}
public class OOP {    
    public static void main(String[] args) {
        Bike b1 = new Bike();
        // b1.bikeColor = "vintage green";
        System.out.println(b1.bikeBrandName);
        System.out.println(b1.bikeCC);
        System.out.println(b1.bikeColor);
        System.out.println(b1.bikeMilage);
        System.out.println(b1.bikeModelName);
    }
}
