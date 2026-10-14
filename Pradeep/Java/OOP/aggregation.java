class Engine{
    void start(){
        System.out.println("Engine has a better future");
    }
}
class Car{
    Engine e = new Engine();
    void show(){
        e.start();
    }
}
public class aggregation {
    public static void main(String[] args) {
        Car c = new Car();
        c.show();
    }
}
