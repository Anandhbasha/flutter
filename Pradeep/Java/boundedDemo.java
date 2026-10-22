class Calculator <T extends Number>{
    T num1;
    T num2;
    Calculator(T num1,T num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    void add(){
        double res = num1.doubleValue() + num2.doubleValue();
        System.out.println("Addition value is:"+res);
    }
}

public class boundedDemo {
    public static void main(String[] args) {
        Calculator <Integer> c1 = new Calculator<>(10,20);
        c1.add();
        Calculator <Float> c2 = new Calculator<>(10.2f,20.5f);
        c2.add();
        Calculator <Double> c3 = new Calculator<>(2000.58,1800.5);
        c3.add();
    }
}
