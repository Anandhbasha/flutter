class NameList <T,U>{
    String name;
    U id;
    T Marks;
    NameList(String name,T Marks,U id){
        this.name= name;
        this.Marks = Marks;
        this.id = id;
    }
    void showMarks(){
        System.out.println(id+" "+"Student name is:"+name+ " "+ "and his mark is:"+Marks);
    }
}
public class genricsClassDemo {
    public static void main(String[] args){
        NameList<Integer,String> s1 = new NameList<>("arun",98,"101");
        s1.showMarks();
    }
}
