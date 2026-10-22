public class genricsDemo{
    public static<T>  T show(T a){
        return  a;
    }
    public static void main(String[] args){
        int g = show(10);
        System.out.println(g);
        float x = show(10.2f);
        System.out.println(x);
    }
}