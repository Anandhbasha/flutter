interface Music{
    void musicDirector();
}
interface Director{
    void MovieDirector();
}
interface Dialouge{
    void DialougeWritter();
}
class Hiphop implements Music,Director,Dialouge{
    public void musicDirector(){
        System.out.println();
    }
    public void MovieDirector(){

    }
    public void DialougeWritter(){

    }
}

public class multipleDemo {
    public static void main(String[] args){

    }
}
