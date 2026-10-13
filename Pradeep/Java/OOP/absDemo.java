interface Payment{
    void pay();
}

class Gpays implements Payment{
    public void pay(){
        System.out.println("Payment done by Gpay");
    }
}
class phonePe implements Payment{
    public void pay(){
        System.out.println("Payment done by phonePe");
    }
}
class payTm implements Payment{
    public void pay(){
        System.out.println("Payment done by payTm");
    }
}
public class absDemo {
    public static void main(String[] args){

    }
}
