class Calculator{
    void add(int a,int b){
        System.out.println(a+b);
    }
    void add(int a,int b,int c){
        System.out.println(a+b+c);
    }
    void add(float a,float b){
        System.out.println(a+b);
    }
}
public class methodoverloading {
    public static void main(String[] args){
        Calculator c = new Calculator();
        c.add(10,30);
        c.add(10,30,40);
        c.add(10.2f,30.5f);
    }
}
