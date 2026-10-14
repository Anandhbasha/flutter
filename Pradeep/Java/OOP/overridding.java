class Restuarant{
    void order(){
        System.out.println("Order placed from res");
    }
}
class VegRes extends Restuarant{
    void order(){
        System.out.println("Order placed from VegRes");
    }
}
class NVegRes extends Restuarant{
    void order(){
        System.out.println("Order placed from NVegRes");
    }
}
public class overridding{
    public static void main(String[] args){
       VegRes veg = new VegRes(); 
       NVegRes nveg = new NVegRes(); 
       veg.order();
       nveg.order();
    }
}