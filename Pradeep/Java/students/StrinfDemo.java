public class StrinfDemo {
    public static void main(String[] args){
        String name = "Aravindh";
        String City = new String("CBE");
        System.out.println(name);
        System.out.println(City);
        // index ->0-A
        // System.out.println(name[0]);
        name = name.concat("Kumar");
         System.out.println(name);
         System.out.println(name.length());
         System.out.println(name.toUpperCase());
         System.out.println(name.toLowerCase());
        //  System.out.println(name.startsWith('A'));
         System.out.println(name.charAt(2));
         System.out.println(name.indexOf('A'));
    }
}
