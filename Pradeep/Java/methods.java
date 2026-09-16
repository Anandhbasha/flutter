
public class methods {
    int show(int a,int b){
         return  a+b;
    }
    public static void main(String[] args) {
      methods m = new methods();
      System.out.println("The addition value is:"+m.show(10,20));
      System.out.println("The addition value is:"+m.show(20,30));
      System.out.println("The addition value is:"+m.show(12,15));
      System.out.println("The addition value is:"+m.show(18,17));
      System.out.println("The addition value is:"+m.show(16,26));
    }
}