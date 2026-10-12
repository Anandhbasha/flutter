class School{
    String schoolName = "abc school";
}
class Principal extends School{
    String schoolName1 = "xyz school";
}
class Staff extends School{

}
class Students extends School{

}

public class hierchicalDemo {
    public static void main(String[] args) {
        Principal p = new Principal();
        Staff s = new Staff();
        Students s = new Students();
    }
}
