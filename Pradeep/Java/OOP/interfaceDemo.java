interface A{
    void show();
}
class Base implements A{
    public void show(){
        System.out.println("Hello Welcome");
    }

}
public class interfaceDemo {
    public static void main(String[] args) {
        Base B = new Base();
        B.show();
    }
}
