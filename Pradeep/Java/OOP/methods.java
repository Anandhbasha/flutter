
public class methods {
  int avg(int a){
    return a/2;
  }
  int show(int a,int b){
      return avg(a+b);
  }
  public static void main(String[] args) {
    methods m = new methods();
    System.out.println("The Average value is:"+m.show(10,20));
    System.out.println("The Average value is:"+m.show(20,30));
    System.out.println("The Average value is:"+m.show(12,15));
    System.out.println("The Average value is:"+m.show(18,17));
    System.out.println("The Average value is:"+m.show(16,26));
  }
}