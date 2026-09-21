import java.util.*;
public class nestedConditional {
    public static void main(String[] args){
        int ug = 72;
        if(ug>70){
            System.out.println("You are eligilble for first round");
            Scanner sc = new Scanner(System.in);
            int res;
            res = sc.nextInt();
            if(res>70){
                System.out.println("You are eligilble for Second round");
                int round_2;
                round_2 = sc.nextInt();
                if(round_2>70){
                    System.out.println("You are Selected");
                }
            }
        }else{
            System.out.println("You not are eligilble for Basic round");
        }

    }
}
