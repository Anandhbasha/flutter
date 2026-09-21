public class conditional {
    public static void main(String[] args) {
        // String courseName = "React";
        // if(courseName=="Flutter"){
        //     System.out.println("Course will starts from monday");
        // }else{
        //    System.out.println("Will update you on monday"); 
        // }
        int temp = 43;
        if(temp<20){
            System.out.println("Swith off the both ac and fan");
        }
        else if(temp>32 && temp<=40){
            System.out.println("Switch on the AC");
        }
        else if(temp>40){
            System.out.println("Switch on the AC and Fan");
        }
        else{
            System.out.println("Switch on the Fan");
        }
    }
}
