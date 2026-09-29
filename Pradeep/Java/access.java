// access specifiers->Private Protect Public
class Phone{
    private String password = "1234";
    void updatePassword(String newPass){
        if(newPass!=" "){
            password = newPass;
        }
    }
    String showPassword(){
        return  password;
    }
}
public class access {
    public static void main(String[] args) {
        Phone pass = new Phone();
        pass.updatePassword("123456");
        System.out.println(pass.showPassword());

    }
}