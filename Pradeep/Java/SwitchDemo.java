import java.util.*;
public class SwitchDemo {
    public static void main(String[] args){
        String courseName;
        Scanner sc = new Scanner(System.in);
        courseName = sc.next();
        switch(courseName){
            case "Flutter":
                System.out.println("Your Class will begins on Monday");
                break;
            case "React":
                System.out.println("Your Class will begins on Tuesday");
                break;
            case "Js":
                System.out.println("Your Class will begins on Wednesday");
                break;
            case "HTML":
                System.out.println("Your Class will begins on Thursday");
                break;
            default:
                System.out.println("Your Class will begins on Friday");
        }

    }
}
