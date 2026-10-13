class Schools{
    String schoolName = "abc school";
    void get(String schoolName){
        System.out.println("Functions School Name:"+schoolName);
        System.out.println(this.schoolName);
    }
}
class Staffs extends Schools{
    String schoolName = "xyz";
    void show(){
        System.out.println(super.schoolName);
    }
}
public class thisDemo {
    public static void main(String[] args){
        Schools s1 =  new Schools();
        s1.get("def schools");
        Staffs s12 = new Staffs();
        s12.show();
    }
}
